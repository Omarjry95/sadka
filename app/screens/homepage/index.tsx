import React from 'react';
import {View} from "react-native";
import styles from './styles';
import Cover from "@app/screens/homepage/cover";
import Main from "@app/screens/homepage/main";

const Homepage = () => (
  <View style={styles.container}>
    <Cover />

    <Main />
  </View>
);

export default Homepage;