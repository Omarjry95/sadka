import React from 'react';
import styles from "../../styles";
import {Text} from "@app/reusable";
import {View} from "react-native";
import Actions from "@app/screens/homepage/main/content/actions";

const Content = () => (
  <View style={styles.mainContent}>
    <Text
      variant="title"
      margin={{ t: 30, b: 20 }}
      size={24}
      align="center"
      value="Nous apprécions ce que vous fassiez de bien pour le monde"
    />

    <Text
      margin={{ b: 30 }}
      align="center"
      value={"Faites un don spontané avec le montant que vous voulez, ou acheter des articles auprès nos partenaires et faites bénéficier les associations" +
        " de l'arrondi solidaire."}
    />

    <Actions />
  </View>
);

export default Content;