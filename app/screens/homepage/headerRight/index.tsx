import React from "react";
import {View} from "react-native";
import styles from "@app/screens/homepage/styles";
import Total from "@app/screens/homepage/headerRight/total";
import Pin from "@app/screens/homepage/headerRight/pin";

const HeaderRight = ({ navigation }: { navigation: any }) => (
  <View style={styles.pinContainer}>
    <View style={styles.pinWrapper}>
      <Total />

      <Pin navigation={navigation} />
    </View>
  </View>
)

export default HeaderRight;