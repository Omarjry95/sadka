import React, {useCallback} from 'react';
import styles from "@app/reusable/complex/defaultValueDisplay/styles";
import CheckBox from "expo-checkbox";
import {Text} from "@app/reusable";
import {View} from "react-native";
import { CaptionBaseProps } from "../models";
import {useTheme} from "@react-navigation/native";

export default function Caption({ disabled, setDisabled, setDefaultValue }: CaptionBaseProps) {

  const { colors } = useTheme();

  const onValueChange = useCallback(() => {
    setDisabled(!disabled);

    setDefaultValue();
  }, [disabled]);

  return (
    <View style={styles.captionContainer}>
      <CheckBox
        style={styles.checkbox}
        color={disabled ? colors.primary : undefined}
        value={disabled}
        onValueChange={() => onValueChange()}
      />

      <Text
        variant="normal"
        color="black"
        value="Votre association par défaut"
      />
    </View>
  )
}