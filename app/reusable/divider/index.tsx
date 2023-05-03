import React, {useMemo} from 'react';
import {View} from "react-native";
import styles from "@app/reusable/divider/styles";
import {useTheme} from "@react-navigation/native";
import {BaseProps} from "@app/reusable/divider/models";
import { Text } from "@app/reusable";

export default function Divider({ label }: BaseProps) {

    const { colors } = useTheme();

    const Separator: () => JSX.Element = () => useMemo(() => (
        <View style={{
            ...styles.separator,
            backgroundColor: colors.border
        }} />
    ), [colors]);

    return (
        <View style={styles.container}>
            <Separator />

            {label && (
                <Text
                    variant="normal"
                    value={label}
                    margin={{ h: 15 }}
                    color={colors.label}
                    size={13}
                />
            )}

            <Separator />
        </View>
    )
}