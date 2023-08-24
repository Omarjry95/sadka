import React, {useMemo} from 'react';
import {TouchableOpacity} from "react-native";
import {BaseStrictProps} from "@app/reusable/button/models";
import styles from "@app/reusable/button/variants/gradient/styles";
import {LinearGradient} from "expo-linear-gradient";
import {useTheme} from "@react-navigation/native";

export default function Gradient({ paddings, margins, disabled, onPress, ChildComponent }: BaseStrictProps) {

    const { colors } = useTheme();

    const gradientColors: string[] = useMemo(() => disabled ? [colors.label, colors.label] : [colors.primary, colors.secondary], [disabled, colors]);

    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                ...margins
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <LinearGradient
                style={{
                    ...styles.gradience,
                    ...paddings
                }}
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <ChildComponent />
            </LinearGradient>
        </TouchableOpacity>
    )
}