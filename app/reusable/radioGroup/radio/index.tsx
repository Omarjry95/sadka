import React from 'react';
import {View} from "react-native";
import {RadioStrictProps} from "@app/reusable/radioGroup/models";
import styles from "@app/reusable/radioGroup/styles";

const PADDING: number = 5;

export default function Radio({ selected, diameter, color }: RadioStrictProps) {

    return (
        <View style={{
            ...styles.radio,
            width: diameter,
            height: diameter,
            padding: PADDING,
            borderColor: color,
            borderRadius: diameter / 2
        }}>
            {selected && (
                <View style={{
                    ...styles.radioEye,
                    backgroundColor: color,
                    borderRadius: (diameter - PADDING * 2) / 2
                }}/>
            )}
        </View>
    )
}