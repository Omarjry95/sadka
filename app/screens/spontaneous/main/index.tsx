import React from 'react';
import styles from "@app/screens/spontaneous/styles";
import {Text} from "@app/reusable";
import Form from "@app/screens/spontaneous/main/form";
import {ScrollView} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";

const Main = ({ navigation }: { navigation: NativeStackNavigationProp<MainStackParamList, 'Spontaneous'> }) => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
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

export default Main;