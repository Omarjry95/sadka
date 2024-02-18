import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from "react-native";
import {Button, Text, TextInput} from "@app/reusable";
import styles from '../../styles';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import Association from "@app/screens/spontaneous/main/form/association";
import {useFocusEffect} from "@react-navigation/native";
import {useLazyGetAssociationsQuery} from "@app/api/apis/userApi";
import {hideLoading, hideModal, showLoading, showModal} from "@app/global/globalSlice";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";
import {
  useConfirmPaymentMutation,
  useCreatePaymentMutation,
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
import PaymentForm from "@app/reusable/complex/paymentForm";
import WsCreatePaymentRequestBaseProps from "../../../../api/models/WsCreatePaymentRequestBaseProps";

export default function Form({ navigation }: { navigation: NativeStackNavigationProp<MainStackParamList, 'Spontaneous'> }) {

  const { currentUser } = useSelector(userSelector);

  const [amount, setAmount] = useState<string>("");
  const [association, setAssociation] = useState<string | null>(null);
  const [isPaymentDataValid, setIsPaymentDataValid] = useState<boolean>(false);
  const [note, setNote] = useState<string>("");

  const [getAssociations, { data: wsAssociationsData = [],
    isError: isGetAssociationsError }] = useLazyGetAssociationsQuery();

  const [getStripePublishableKey,
    { isError: isGetStripePublishableKeyError }] = useLazyGetStripePublishableKeyQuery();

  const [createPayment, { data: wsCreatePaymentData,
    isError: isCreatePaymentError }] = useCreatePaymentMutation();

  const [confirmPayment,
    { data: wsConfirmPaymentData }] = useConfirmPaymentMutation();

  const dispatch = useDispatch();

  const defaultAssociation: string | null = useMemo(() => currentUser?.defaultAssociation ?? null, [currentUser]);

  useFocusEffect(
    useCallback(() => {
      dispatch(showLoading());

      getAssociations()
        .then(() => getStripePublishableKey().unwrap())
        .then(({ stripePublishableKey: publishableKey }: WsStripePublishableKeyBaseProps) => initStripe({ publishableKey }))
        .then(() => {
          setAssociation(defaultAssociation);

          dispatch(hideLoading());
        });
    }, [defaultAssociation]));

  useEffect(() => {
    if (isGetAssociationsError || isGetStripePublishableKeyError) {
      displayError('Homepage');
    }

    if (isCreatePaymentError) {
      displayError();
    }
  }, [isGetAssociationsError, isGetStripePublishableKeyError, isCreatePaymentError]);

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
      association === null || !isPaymentDataValid,
    [amount, association, isPaymentDataValid]);

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

  const onSubmit = async () => {
    if (currentUser && association) {
      const { lastName, firstName , email } = currentUser;

      dispatch(showLoading());

      const billingDetails: BillingDetails = {
        name: `${firstName} ${lastName}`,
        email
      }

      const { paymentMethod, error } = await createPaymentMethod({
        paymentMethodType: 'Card',
        paymentMethodData: { billingDetails }
      });

      if (error || !paymentMethod) {
        displayError();
        return;
      }

      let wsCreatePaymentProps: WsCreatePaymentRequestBaseProps = {
        originalAmount: Number(amount),
        paymentMethodId: paymentMethod.id,
        association,
        savePaymentMethod: true
      };

      if (note.trim().length > 0) {
        wsCreatePaymentProps = {
          ...wsCreatePaymentProps,
          note
        }
      }

      createPayment(wsCreatePaymentProps);
    }
  }

  return (
    <View style={styles.form}>
      <TextInput
        numericKeyboard
        variant="labelInside"
        padding={{ a: 10 }}
        margin={{ b: 25 }}
        label="Montant"
        value={amount}
        onChange={setAmount}
      />

      <Association
        list={wsAssociationsData}
        association={association}
        defaultAssociation={defaultAssociation}
        setAssociation={setAssociation}
      />

      <PaymentForm
        label="Données de paiement"
        margin={{ b: 25 }}
        borderWidth={1}
        borderRadius={10}
        setIsPaymentDataValid={setIsPaymentDataValid}
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
        onPress={() => dispatch(showModal({
          variant: "normal",
          mainAction: () => dispatch(hideModal()),
          dialogBody: () => <View style={{
            width: "100%",
            padding: 15,
            backgroundColor: "white",
            borderWidth: 2,
            borderRadius: 10,
            position: "relative",
            flexDirection: "column",
            alignItems: "center"
          }}>

          </View>
        }))}
      />
    </View>
  )
}