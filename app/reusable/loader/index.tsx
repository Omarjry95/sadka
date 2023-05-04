import React from 'react';
import {ActivityIndicator, View} from "react-native";
import styles from "@app/reusable/loader/styles";
import {useTheme} from "@react-navigation/native";

export default function Loader() {

    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color={colors.primary}
                style={{ transform: [{ scale: 1.5 }] }}
            />
        </View>
    )
}