import React, {useState} from 'react';
import {View} from "react-native";
import {Select, TextInput} from "@app/reusable";
import styles from '../styles';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import Association from "@app/screens/spontaneous/form/association";

export default function Form({ navigation }: { navigation: NativeStackNavigationProp<MainStackParamList, 'Spontaneous'> }) {

  const [amount, setAmount] = useState<string>("");
  const [association, setAssociation] = useState<string | null>(null);

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
        association={association}
        setAssociation={setAssociation}
        navigation={navigation}
      />
    </View>
  )
}