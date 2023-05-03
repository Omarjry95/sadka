import React from 'react';
import {TouchableOpacity} from "react-native";
import {BaseStrictProps} from "@app/reusable/button/models";
import styles from "@app/reusable/button/variants/gradient/styles";
import {LinearGradient} from "expo-linear-gradient";
import {useTheme} from "@react-navigation/native";

export default function Gradient({ paddings, margins, onPress, ChildComponent }: BaseStrictProps) {

    const { colors } = useTheme();

    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                ...margins
            }}
            onPress={onPress}
        >
            <LinearGradient
                style={{
                    ...styles.gradience,
                    ...paddings
                }}
                colors={[colors.primary, colors.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <ChildComponent />
            </LinearGradient>
        </TouchableOpacity>
    )
}