import * as React from "react";
import {HeaderBackButton} from "@react-navigation/elements";
import {View} from "react-native";
import styles from "../styles";

const Header = ({ navigation }: { navigation: any }) => (
  <View style={styles.header}>
    <HeaderBackButton onPress={() => navigation.goBack()} />
  </View>
)

export default Header;