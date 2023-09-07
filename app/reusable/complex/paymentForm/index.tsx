import React, {useState} from 'react';
import {CardField} from "@stripe/stripe-react-native";
import {useTheme} from "@react-navigation/native";
import styles from "@app/reusable/complex/paymentForm/styles";
import {PaymentFormBaseProps} from "@app/reusable/complex/paymentForm/models";
import {View} from "react-native";
import {Text} from "@app/reusable";
import {getStyleMargin} from "@app/utilities/spacing";

export default function PaymentForm({ label, margin, borderWidth, borderRadius, size }: PaymentFormBaseProps) {

  const [isFocused, setIsFocused] = useState<boolean>(false);

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
      />
    </View>
  )
}