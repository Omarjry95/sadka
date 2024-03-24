import React, {useMemo} from 'react';
import styles from "@app/reusable/complex/defaultValueDisplay/styles";
import {View} from "react-native";
import {MainBaseProps} from "@app/reusable/complex/defaultValueDisplay/models";
import {getStyleBorderRadius} from "@app/utilities/border";

export default function Main({ disabled, borderRadius, mainComponent, alternateComponent }: MainBaseProps) {

  // const displayedComponent = (): (() => JSX.Element) | JSX.Element => {
  //   if (!alternateComponent)
  //     return mainComponent;
  //
  //   return disabled ? alternateComponent : mainComponent;
  // };

  const displayedComponent = (): JSX.Element => {
    const getComponent = (component: (() => JSX.Element) | JSX.Element): JSX.Element => {
      return typeof component === 'function' ? component() : component;
    };

    if (!alternateComponent)
      return getComponent(mainComponent);

    return disabled ? getComponent(alternateComponent) : getComponent(mainComponent);
  };

  return (
    <View style={styles.main}>
      <View style={styles.mainWrapper}>
        {displayedComponent()}
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