import React from 'react';
import styles from "@app/screens/donation/styles";
import {Text} from "@app/reusable";
import Form from "@app/screens/donation/main/form";
import {ScrollView} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import {useTheme} from "@react-navigation/native";

export default function Main({ navigation }: { navigation: NativeStackNavigationProp<MainStackParamList, 'Donation'> }) {

  const { colors } = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text
        variant="title"
        margin={{ b: 10 }}
        color="black"
        size={24}
        align="center"
        value="Faites votre don ici"
      />

      <Text
        variant="normal"
        value="Des simples saisies vous mènent à effectuer votre don rapidement."
        margin={{ b: 20 }}
        color={colors.label}
        align="center"
      />

      <Form navigation={navigation} />
    </ScrollView>
  )
}