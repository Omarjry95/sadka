import React, {useMemo} from 'react';
import styles from "@app/reusable/complex/defaultValueDisplay/styles";
import {View} from "react-native";
import {MainBaseProps} from "@app/reusable/complex/defaultValueDisplay/models";
import {getStyleBorderRadius} from "@app/utilities/border";

export default function Main({ disabled, borderRadius, mainComponent, alternateComponent }: MainBaseProps) {

  const DisplayedComponent: () => JSX.Element = useMemo(() => {
    if (!alternateComponent)
      return mainComponent;

    return disabled ? alternateComponent : mainComponent;
  }, [disabled, mainComponent, alternateComponent]);

  return (
    <View style={styles.main}>
      <View style={styles.mainWrapper}>
        <DisplayedComponent />
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