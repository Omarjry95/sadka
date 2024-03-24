import React, {useCallback} from 'react';
import styles from "@app/reusable/complex/defaultValueDisplay/styles";
import CheckBox from "expo-checkbox";
import {Text} from "@app/reusable";
import {View} from "react-native";
import { CaptionBaseProps } from "../models";
import {useTheme} from "@react-navigation/native";

export default function Caption({ disabled, text, setDisabled, setDefaultValue }: CaptionBaseProps) {

  const { colors } = useTheme();

  const onValueChange = useCallback(() => {
    setDisabled(!disabled);

    setDefaultValue();
  }, [disabled, setDefaultValue]);

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
        value={text}
      />
    </View>
  )
}