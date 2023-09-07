import React from 'react';
import styles from "@app/reusable/complex/defaultValueDisplay/styles";
import {View} from "react-native";
import {MainBaseProps} from "@app/reusable/complex/defaultValueDisplay/models";
import {getStyleBorderRadius} from "@app/utilities/border";

export default function Main({ disabled, borderRadius, mainComponent: MainComponent }: MainBaseProps) {

  return (
    <View style={styles.main}>
      <View style={styles.mainWrapper}>
        <MainComponent />
      </View>

      {disabled && (
        <View style={{
            ...styles.cover,
            ...getStyleBorderRadius(borderRadius)
          }}
        />
      )}
    </View>
  )
}