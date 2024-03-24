import React from 'react';
import {View} from "react-native";
import styles from './styles';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {MainStackParamList} from "@app/navigation/models";
import Main from "@app/screens/donation/main";

const Donation = ({ navigation }: { navigation: NativeStackNavigationProp<MainStackParamList, 'Donation'> }) => (
  <View style={styles.container}>
    <View style={styles.header} />

    <Main navigation={navigation} />
  </View>
)

export default Donation;