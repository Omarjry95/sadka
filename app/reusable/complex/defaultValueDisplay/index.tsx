import React, {useCallback, useState} from 'react';
import {View} from "react-native";
import {DefaultValueDisplayBaseProps} from "@app/reusable/complex/defaultValueDisplay/models";
import styles from './styles';
import Caption from "@app/reusable/complex/defaultValueDisplay/caption";
import Main from "@app/reusable/complex/defaultValueDisplay/main";
import {useFocusEffect} from "@react-navigation/native";
import {getStyleMargin} from "@app/utilities/spacing";

export default function DefaultValueDisplay({ autoDisabled, captionText, margin, borderRadius,
                                              mainComponent, alternateComponent,
                                              setDefaultValue }: DefaultValueDisplayBaseProps) {

  const [disabled, setDisabled] = useState<boolean>(false);

  useFocusEffect(useCallback(() => {
    setDisabled(autoDisabled);
  }, [autoDisabled]));

  return (
    <View style={{
      ...styles.container,
      ...getStyleMargin(margin)
    }}>
      <Main
        disabled={disabled}
        borderRadius={borderRadius}
        mainComponent={mainComponent}
        alternateComponent={alternateComponent}
      />

      {autoDisabled && (
        <Caption
          disabled={disabled}
          text={captionText}
          setDisabled={setDisabled}
          setDefaultValue={setDefaultValue}
        />
      )}
    </View>
  )
}