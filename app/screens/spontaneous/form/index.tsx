import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {View} from "react-native";
import {TextInput} from "@app/reusable";
import styles from '../styles';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import Association from "@app/screens/spontaneous/form/association";
import {useFocusEffect} from "@react-navigation/native";
import {useLazyGetAssociationsQuery} from "@app/api/apis/userApi";
import {hideLoading, hideModal, showLoading, showModal} from "@app/global/globalSlice";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "@app/global/userSlice";
import Payment from "@app/screens/spontaneous/form/payment";
import {useLazyGetStripePublishableKeyQuery} from "@app/api/apis/paymentApi";
import {initStripe} from "@stripe/stripe-react-native";
import {WsStripePublishableKeyBaseProps} from "@app/api/models";

export default function Form({ navigation }: { navigation: NativeStackNavigationProp<MainStackParamList, 'Spontaneous'> }) {

  const { currentUser } = useSelector(userSelector);

  const [amount, setAmount] = useState<string>("");
  const [association, setAssociation] = useState<string | null>(null);

  const [getAssociations, { data: wsAssociationsData = [],
    isError: isGetAssociationsError }] = useLazyGetAssociationsQuery();

  const [getStripePublishableKey, { isError: isGetStripePublishableKeyError }] = useLazyGetStripePublishableKeyQuery();

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
      dispatch(hideLoading());

      dispatch(showModal({
        variant: "error",
        mainAction: () => {
          dispatch(hideModal());
          navigation.navigate('Homepage');
        }
      }));
    }
  }, [isGetAssociationsError, isGetStripePublishableKeyError]);

  return (
    <View style={styles.form}>
      <TextInput
        numericKeyboard
        variant="labelInside"
        padding={{ a: 10 }}
        margin={{ b: 15 }}
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

      <Payment />
    </View>
  )
}