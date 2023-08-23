import React from 'react';
import styles from "@app/screens/changePassword/styles";
import {Text} from "@app/reusable";
import {View} from "react-native";

const NewPasswordHelpComponent = () => (
  <View style={styles.modalBody}>
    <Text
      variant="normal"
      value="- Votre mot de passe doit contenir au moins 6 caractères."
      color="black"
    />
  </View>
)

export default NewPasswordHelpComponent;