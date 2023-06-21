import React from 'react';
import {Button, Divider, Text} from "@app/reusable";
import {View} from "react-native";
import styles from "@app/screens/lobby/styles";
import {useTheme} from "@react-navigation/native";

export default function GoBack() {

    const { colors } = useTheme();

    return (
        <View style={styles.bottomContainer}>
            <Divider />

            <Button
                variant="straight"
                width="100%"
                padding={{ v: 20 }}
                childComponent={() => (
                    <Text
                        variant="normal"
                        value="Retour"
                        color={colors.label}
                    />
                )}
            />
        </View>
    )
}