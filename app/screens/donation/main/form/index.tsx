import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from "react-native";
import {Button, Text, TextInput} from "@app/reusable";
import styles from '../../styles';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import Association from "@app/screens/donation/main/form/association";
import {useFocusEffect} from "@react-navigation/native";
import {useLazyGetAssociationsQuery} from "@app/api/apis/userApi";
import {hideLoading, hideModal, showLoading, showModal} from "@app/global/globalSlice";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";
import {
  useConfirmPaymentMutation,
  useCreatePaymentMutation, useLazyGetLastSetupCardQuery,
  useLazyGetStripePublishableKeyQuery
} from "@app/api/apis/paymentApi";
import {
  initStripe,
  BillingDetails,
  createPaymentMethod,
  handleNextAction,
  HandleNextActionResult, PaymentIntent
} from "@stripe/stripe-react-native";
import {WsStripePublishableKeyBaseProps} from "@app/api/models";
import WsCreatePaymentRequestBaseProps from "../../../../api/models/WsCreatePaymentRequestBaseProps";
import PaymentForm from "@app/screens/donation/main/form/paymentForm";
import SaveCardDialog from "@app/screens/donation/main/form/saveCardDialog";
import {SaveCardDialogActionBaseProps} from "@app/screens/donation/models";
import {useLazyGetStoresQuery} from "@app/api/apis/storeApi";
import {donationSelector} from "@app/global/donationSlice";
import Store from "@app/screens/donation/main/form/store";
import Rounding from "@app/screens/donation/main/form/rounding";
import {useLazyGetRoundingsQuery} from "@app/api/apis/roundingApi";
import {SAVE_CARD_DIALOG_ACTIONS} from "@app/screens/donation/constants";
import Overview from "@app/screens/donation/main/form/overview";

export default function Form({ navigation }: { navigation: NativeStackNavigationProp<MainStackParamList, 'Donation'> }) {

  const { currentUser } = useSelector(userSelector);
  const { isSpontaneous } = useSelector(donationSelector);

  const [store, setStore] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [rounding, setRounding] = useState<string | null>(null);
  const [association,
    setAssociation] = useState<string | null>(null);
  const [isPaymentDataValid,
    setIsPaymentDataValid] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");
  const [useLastCardSetup,
    setUseLastCardSetup] = useState<boolean>(false)

  const [getStores, { data: wsStoresData = [],
    isError: isGetStoresError }] = useLazyGetStoresQuery();

  const [getAssociations, { data: wsAssociationsData = [],
    isError: isGetAssociationsError }] = useLazyGetAssociationsQuery();

  const [getRoundings, { data: wsRoundingsData = [],
    isError: isGetRoundingsError }] = useLazyGetRoundingsQuery();

  const [getLastSetupCard, { data: wsLastSetupCardData,
    isError: isGetLastSetupCardError }] = useLazyGetLastSetupCardQuery();

  const [getStripePublishableKey,
    { isError: isGetStripePublishableKeyError }] = useLazyGetStripePublishableKeyQuery();

  const [createPayment, { data: wsCreatePaymentData,
    isError: isCreatePaymentError }] = useCreatePaymentMutation();

  const [confirmPayment,
    { data: wsConfirmPaymentData }] = useConfirmPaymentMutation();

  const dispatch = useDispatch();

  const defaultAssociation: string | null = useMemo(() => currentUser?.defaultAssociation ?? null, [currentUser]);
  const defaultRounding: string | null = useMemo(() => currentUser?.defaultRounding ?? null, [currentUser]);

  useFocusEffect(
    useCallback(() => {
      dispatch(showLoading());

      getAssociations()
        .then(() => getStripePublishableKey().unwrap())
        .then(({ stripePublishableKey: publishableKey }: WsStripePublishableKeyBaseProps) => initStripe({ publishableKey }))
        .then(() => getLastSetupCard().unwrap())
        .then(async (lastSetupCardData) => {
          if (!isSpontaneous) {
            await getStores();
            await getRoundings();
          }

          setUseLastCardSetup(!!lastSetupCardData);
          setAssociation(defaultAssociation);
          setRounding(defaultRounding);

          dispatch(hideLoading());
        });
    }, [defaultAssociation]));

  useEffect(() => {
    if (isGetAssociationsError || isGetLastSetupCardError || isGetStripePublishableKeyError
      || isGetStoresError)
      displayError('Homepage');

    if (isCreatePaymentError)
      displayError();
  }, [isGetAssociationsError, isGetLastSetupCardError, isGetStripePublishableKeyError,
    isCreatePaymentError, isGetStoresError]);

  useEffect(() => {
    if (wsCreatePaymentData) {
      const { success, requiresAction,
        clientSecret } = wsCreatePaymentData;

      if (success)
        displaySuccess();
      else if (requiresAction && clientSecret) {
        handleNextAction(clientSecret)
          .then(({ paymentIntent, error }: HandleNextActionResult) => {
            if (error || !paymentIntent) {
              displayError();
              return;
            }

            if (paymentIntent.status === PaymentIntent.Status.RequiresConfirmation) {
              confirmPayment({ paymentIntentId: paymentIntent.id });
            }
          })
          .catch(() => displayError());
      }
    }
  }, [wsCreatePaymentData]);

  useEffect(() => {
    if (wsConfirmPaymentData)
      wsConfirmPaymentData.success ? displaySuccess() : displayError();
  }, [wsConfirmPaymentData]);

  const isDisabled: boolean = useMemo(() => isNaN(Number(amount)) || Number(amount) === 0 ||
      association === null || (!useLastCardSetup && !isPaymentDataValid),
    [amount, association, isPaymentDataValid, useLastCardSetup]);

  const getAmountInputLabel = useCallback((): string => {
    const label: string = "Montant";

    return isSpontaneous ? label : [label, "original"].join(" ");
  }, [isSpontaneous]);

  const displaySuccess = useCallback((): void => {
    dispatch(hideLoading());

    dispatch(showModal({
      variant: "success",
      mainAction: () => { },
      stateMessage: "Votre don a été fait avec succès. Merci pour votre générosité."
    }));

    setTimeout(() => {
      dispatch(hideModal());
      navigation.navigate('Homepage');
    }, 2000);
  }, [navigation]);

  const displayError = useCallback((navigateTo?: keyof MainStackParamList): void => {
    dispatch(hideLoading());

    dispatch(showModal({
      variant: "error",
      mainAction: () => {
        dispatch(hideModal());

        if (navigateTo)
          navigation.navigate(navigateTo);
      }
    }));
  }, [navigation]);

  const onSubmit = async (savePaymentMethod?: boolean) => {
    if (currentUser && association) {
      const { lastName, firstName , email } = currentUser;

      dispatch(showLoading());

      let wsCreatePaymentProps: WsCreatePaymentRequestBaseProps = {
        originalAmount: Number(amount),
        association,
        savePaymentMethod: !!savePaymentMethod
      };

      if (!useLastCardSetup) {
        const billingDetails: BillingDetails = {
          name: `${firstName} ${lastName}`,
          email
        }

        const { paymentMethod,
          error } = await createPaymentMethod({
          paymentMethodType: 'Card',
          paymentMethodData: { billingDetails }
        });

        if (error || !paymentMethod) {
          displayError();
          return;
        }

        wsCreatePaymentProps = {
          ...wsCreatePaymentProps,
          paymentMethodId: paymentMethod.id
        }
      }

      if (note.trim()) {
        wsCreatePaymentProps = {
          ...wsCreatePaymentProps,
          note
        }
      }

      createPayment(wsCreatePaymentProps);
    }
  }

  const onSubmitConditional = () => {
    !useLastCardSetup ? dispatch(showModal({
      variant: "normal",
      mainAction: () => dispatch(hideModal()),
      dialogBody: () => (<SaveCardDialog />),
      customActions: SAVE_CARD_DIALOG_ACTIONS.map(({ save, label }) => ({
        onPress: () => onSubmit(save), childComponent: () => (
          <Text
            variant="normal"
            value={label}
            color="black"
            align="center"
          />
        )
      }))
    })) : onSubmit();
  }

  return (
    <View style={styles.form}>
      {!isSpontaneous && (
        <Store
          list={wsStoresData}
          store={store}
          setStore={setStore}
        />
      )}

      <TextInput
        numericKeyboard
        variant="labelInside"
        padding={{ a: 10 }}
        margin={{ b: 25 }}
        label={getAmountInputLabel()}
        value={amount}
        onChange={setAmount}
      />

      {!isSpontaneous && (
        <Rounding
          list={wsRoundingsData}
          rounding={rounding}
          defaultRounding={defaultRounding}
          setRounding={setRounding}
        />
      )}

      <Association
        list={wsAssociationsData}
        association={association}
        defaultAssociation={defaultAssociation}
        setAssociation={setAssociation}
      />

      {(!isSpontaneous && rounding) && (
        <Overview
          amount={amount}
          rounding={rounding}
          roundings={wsRoundingsData}
        />
      )}

      <PaymentForm
        label="Données de paiement"
        lastSetupCard={wsLastSetupCardData}
        useLastCardSetup={useLastCardSetup}
        setIsPaymentDataValid={setIsPaymentDataValid}
        setUseLastCardSetup={setUseLastCardSetup}
      />

      <TextInput
        multiline
        variant="labelInside"
        padding={{ a: 10 }}
        margin={{ b: 25 }}
        label="Note"
        defaultNumberOfLines={3}
        value={note}
        onChange={setNote}
      />

      <Button
        disabled={isDisabled}
        variant="gradient"
        padding={{ v: 20, h: 5 }}
        margin={{ b: 10 }}
        childComponent={() => (
          <Text
            variant="normal"
            value="Confirmer"
          />
        )}
        // onPress={onSubmit}
        onPress={onSubmitConditional}
      />
    </View>
  )
}