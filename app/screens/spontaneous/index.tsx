import React from 'react';
import {View} from "react-native";
import styles from './styles';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import Main from "@app/screens/spontaneous/main";

const Spontaneous = ({ navigation }: { navigation: NativeStackNavigationProp<MainStackParamList, 'Spontaneous'> }) => (
  <View style={styles.container}>
    <View style={styles.header} />

    <Main navigation={navigation} />
  </View>
)

export default Spontaneous;