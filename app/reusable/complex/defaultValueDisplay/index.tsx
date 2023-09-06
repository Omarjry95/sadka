import React, {useCallback, useState} from 'react';
import {View} from "react-native";
import {DefaultValueDisplayBaseProps} from "@app/reusable/complex/defaultValueDisplay/models";
import styles from './styles';
import Caption from "@app/reusable/complex/defaultValueDisplay/caption";
import Main from "@app/reusable/complex/defaultValueDisplay/main";
import {useFocusEffect} from "@react-navigation/native";

export default function DefaultValueDisplay({ autoDisabled, mainComponent, setDefaultValue }: DefaultValueDisplayBaseProps) {

  const [disabled, setDisabled] = useState<boolean>(false);

  useFocusEffect(useCallback(() => {
    setDisabled(autoDisabled);
  }, [autoDisabled]));

  return (
    <View style={styles.container}>
      <Main
        disabled={disabled}
        mainComponent={mainComponent}
      />

      {autoDisabled && (
        <Caption
          disabled={disabled}
          setDisabled={setDisabled}
          setDefaultValue={setDefaultValue}
        />
      )}
    </View>
  )
}