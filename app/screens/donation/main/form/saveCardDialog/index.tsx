import React from 'react';
import {Text} from "@app/reusable";
import {View} from "react-native";

const saveCardDialog = () => (
  <View style={{
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: "relative",
    flexDirection: "column",
    alignItems: "center"
  }}>
    <Text
      variant="normal"
      value="Voulez-vous sauvegarder cette carte pour vos prochains paiements ?"
      color="black"
      align="center"
    />
  </View>
);

export default saveCardDialog;