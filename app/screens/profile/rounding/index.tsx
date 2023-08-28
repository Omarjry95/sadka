import React, {useMemo} from 'react';
import styles from "@app/screens/profile/styles";
import {View} from "react-native";
import {Select} from "@app/reusable";
import {RoundingBaseProps} from "@app/screens/profile/models";
import {ListItemProps} from "@app/reusable/select/models";
import {WsRoundingBaseProps} from "@app/api/models";
import ListItemBottomComponent from "@app/screens/profile/rounding/listItemBottomComponent";

export default function Rounding({ list, rounding, setRounding }: RoundingBaseProps) {

  const formattedRoundings = useMemo(() => {
    const exampleNumber: number = Math.random();

    let roundings: ListItemProps[] = list.map(({ _id: id, label, power }: WsRoundingBaseProps) => ({
      id,
      label,
      bottomComponent: () => (
        <ListItemBottomComponent
          exampleNumber={exampleNumber}
          power={power}
        />
      )
    }));

    roundings.unshift({
      id: null,
      label: "Laisser le choix lors de l'achat"
    });

    return roundings;
  }, [list]);

  return (
    <View style={styles.selectContainer}>
      <Select
        list={formattedRoundings}
        value={rounding}
        label="Arrondi par défaut"
        width="100%"
        padding={{ a: 15 }}
        border={{ a: 1 }}
        borderColor="black"
        borderRadius={{ a: 10 }}
        setValue={setRounding}
      />
    </View>
  )
}