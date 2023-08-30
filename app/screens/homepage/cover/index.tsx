import React, {useEffect, useState} from 'react';
import styles from "../styles";
import {Image} from "@app/reusable";
import {View} from "react-native";
import {useDispatch} from "react-redux";
import {hideLoading, showLoading} from "@app/global/globalSlice";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import {homepageCoverUrl} from "@app/screens/homepage/constants";

export default function Cover() {

  const [cover, setCover] = useState<string | undefined>(undefined);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLoading());

    getDownloadURL(ref(getStorage(), homepageCoverUrl))
      .then(setCover)
      .finally(() => dispatch(hideLoading()));
  }, []);

  return (
    <View style={styles.coverSection}>
      {cover && (
        <Image
          fullWidth
          variant="water"
          source={cover}
          resizeMode="contain"
        />
      )}
    </View>
  )
}