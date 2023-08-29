import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {Button, Image, Text} from "@app/reusable";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {useDispatch} from "react-redux";
import {hideLoading, showLoading} from "@app/global/globalSlice";
import styles from './styles';

export default function Homepage() {

  const [cover, setCover] = useState<string | undefined>(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoading());

    getDownloadURL(ref(getStorage(), 'homepage.jpg'))
      .then(setCover)
      .finally(() => dispatch(hideLoading()));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.coverSection}>
        {cover && (
          <Image
            fullWidth
            variant="water"
            source={cover}
          />
        )}
      </View>

      <View style={styles.mainSection}>
        <View style={styles.mainContent}>
          <Text
            variant="title"
            margin={{ t: 30, b: 20 }}
            size={24}
            align="center"
            value="Nous apprécions ce que vous fassiez de bien pour le monde"
          />

          <Text
            margin={{ b: 20 }}
            align="center"
            value={"Faites un don spontané avec le montant que vous voulez, ou acheter des articles auprès nos partenaires et faites bénéficier les associations" +
              " de l'arrondi solidaire."}
          />

          <Button
            variant="gradient"
            padding={{ v: 20, h: 5 }}
            margin={{ b: 10 }}
            childComponent={() => (
              <Text value="Don spontané" />
            )}
          />

          <Button
            variant="gradient"
            padding={{ v: 20, h: 5 }}
            margin={{ b: 10 }}
            childComponent={() => (
              <Text value="L'arrondi solidaire" />
            )}
          />
        </View>

        <View style={styles.curvedLine} />
      </View>
    </View>
  )
}