import React from 'react';
import styles from "../styles";
import {View} from "react-native";
import Content from "@app/screens/homepage/main/content";

const Main = () => (
  <View style={styles.mainSection}>
    <Content />

    <View style={styles.curvedLine} />
  </View>
);

export default Main;