import React from 'react';
import {Text} from "@app/reusable";
import {ScrollView} from "react-native";
import styles from './styles';
import Form from "@app/screens/spontaneous/form";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";

export default function Spontaneous({ navigation }: { navigation: NativeStackNavigationProp<MainStackParamList, 'Spontaneous'> }) {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        variant="title"
        margin={{ b: 30 }}
        color="black"
        size={24}
        align="center"
        value="Faites votre don ici"
      />

      <Form navigation={navigation} />
    </ScrollView>
  )
}