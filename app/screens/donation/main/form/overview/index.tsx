import {View} from "react-native";
import styles from "@app/screens/donation/styles";
import {Text} from "@app/reusable";
import React, {useCallback, useMemo} from "react";
import {euroSymbol} from "@app/utilities/regex";
import { OverviewBaseProps, OverviewItemBaseProps } from "../../../models";

export default function Overview({ amount, rounding, roundings }: OverviewBaseProps) {

  const amountAsNumber = useMemo(() => Number(amount), [amount]);

  const amountIsValid: boolean = useMemo(() => !!amount && !isNaN(amountAsNumber),
    [amount, amountAsNumber]);

  const roundingItem = useMemo(() => roundings
    .find((r) => r._id === rounding), [rounding, roundings]);

  const getTenPower = useCallback((power: number) => Math.pow(10, power), []);

  const getAmountWithCurrency = useCallback((amount: number) => [amount, euroSymbol].join(" "),
    []);

  const items: OverviewItemBaseProps[] = useMemo(() => {
    const items: OverviewItemBaseProps[] = [];

    if (amountIsValid && roundingItem) {
      const pointTo = getTenPower(3 - roundingItem.power);
      const totalAmount = (Number((amountAsNumber * pointTo).toFixed(0)) + 1) / pointTo;

      items.push({
        label: "Le montant arrondi",
        value: totalAmount
      }, {
        label: "Votre association va recevoir",
        value: Number((totalAmount - amountAsNumber).toFixed(3))
      })
    }

    return items;
  }, [amountAsNumber, amountIsValid, roundingItem]);

  return (
    amountIsValid && roundingItem ?
      (
        <View style={styles.overviewContainer}>
          {items.map((item, index, array) => (
            <View style={{
              ...styles.overviewItemContainer,
              marginBottom: index !== array.length - 1 ? 10 : 0
            }}>
              <View style={styles.overviewItemLabelContainer}>
                <Text
                  color="black"
                  value={[item.label, ":"].join("")}
                />
              </View>

              <Text
                color="black"
                value={getAmountWithCurrency(item.value)}
              />
            </View>
          ))}
        </View>
      ) : null
  )
}