import React, {useEffect, useRef, useState} from 'react';
import {CardField, CardFieldInput} from "@stripe/stripe-react-native";
import {useTheme} from "@react-navigation/native";
import styles from "@app/reusable/complex/paymentForm/styles";
import {PaymentFormBaseProps} from "@app/reusable/complex/paymentForm/models";
import {View} from "react-native";
import {Text} from "@app/reusable";
import {getStyleMargin} from "@app/utilities/spacing";

export default function PaymentForm({ label, margin, borderWidth, borderRadius, size,
                                      setIsPaymentDataValid }: PaymentFormBaseProps) {

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputRef = useRef<CardFieldInput.Methods>(null);

  const { colors } = useTheme();

  return (
    <View style={{
      ...styles.container,
      ...getStyleMargin(margin)
    }}>
      {label && (
        <Text
          value={label}
          color="black"
          margin={{ l: 5, b: 10 }}
        />
      )}

      <CardField
        ref={inputRef}
        style={styles.form}
        cardStyle={{
          backgroundColor: "white",
          borderWidth,
          borderColor: isFocused ? colors.primary : colors.border,
          borderRadius,
          textColor: "black",
          fontFamily: "OpenSans",
          fontSize: size ?? 16,
          textErrorColor: colors.primary,
          cursorColor: colors.label
        }}
        placeholders={{
          number: "N° de la carte",
          expiration: "MM/YY",
          cvc: "CVC"
        }}
        postalCodeEnabled={false}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onCardChange={(data: CardFieldInput.Details) => {
          const { validNumber, validExpiryDate, validCVC } = data;

          const isDataValid: boolean = [validNumber, validExpiryDate, validCVC]
            .every((v: CardFieldInput.ValidationState) => v === CardFieldInput.ValidationState.Valid);

          setIsPaymentDataValid(isDataValid);
        }}
      />
    </View>
  )
}