import React from 'react';
import {View} from "react-native";
import styles from '../../../../styles';
import {Text} from "@app/reusable";
import { AlternatePaymentComponentBaseProps } from "../../../../models";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";

export default function Alternate({ label, lastSetupCard }: AlternatePaymentComponentBaseProps) {

  const { hiddenCardNumber, expiresAt } = lastSetupCard;

  return (
    <View style={styles.paymentAlternateContainer}>
      {label && (
        <Text
          value={label}
          color="black"
          margin={{ l: 5, b: 10 }}
        />
      )}

      <View style={{
        ...styles.paymentDataContainer,
        ...getStyleMargin({ l: 5 }),
        ...getStylePadding({ v: 5 })
      }}>
        <View style={styles.paymentCardNumberContainer}>
          <FontAwesome
            name="credit-card-alt"
            style={styles.paymentDataIcon}
            color="black"
            size={24}
          />

          <Text
            variant="normal"
            color="black"
            value={hiddenCardNumber}
          />
        </View>

        <View style={styles.paymentExpiryDateContainer}>
          <Entypo
            name="calendar"
            style={styles.paymentDataIcon}
            color="black"
            size={24}
          />

          <Text
            variant="normal"
            color="black"
            value={expiresAt}
          />
        </View>
      </View>
    </View>
  )
}