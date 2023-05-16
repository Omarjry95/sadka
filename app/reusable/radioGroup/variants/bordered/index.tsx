import React, {useMemo} from 'react';
import {TouchableOpacity, Text} from "react-native";
import styles from "@app/reusable/radioGroup/styles";
import {BaseStrictProps} from "@app/reusable/radioGroup/models";
import {useTheme} from "@react-navigation/native";
import Radio from "@app/reusable/radioGroup/radio";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

export default function Bordered({ selected, label, width, paddings, margins, borders, selectionColor, labelSize, labelTransform, setValue }: BaseStrictProps) {

    const { colors } = useTheme();

    const color: ColorValue = useMemo(() => selected ? selectionColor : colors.border,
        [selected, selectionColor, colors]);

    return (
        <TouchableOpacity
            style={{
                ...styles.radioContainer,
                ...paddings,
                ...margins,
                ...borders,
                width: width + '%',
                borderColor: color
            }}
            onPress={setValue}
        >
            <Radio
                selected={selected}
                diameter={25}
                color={color}
            />

            {!!label.length && (
                <Text style={{
                    ...styles.label,
                    fontSize: labelSize,
                    textTransform: labelTransform
                }}>
                    {label}
                </Text>
            )}
        </TouchableOpacity>
    )
}