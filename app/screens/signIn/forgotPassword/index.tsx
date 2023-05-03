import * as React from 'react';
import {View} from "react-native";
import styles from "@app/screens/signIn/forgotPassword/styles";
import {Button, Text} from "@app/reusable";
import {useTheme} from "@react-navigation/native";

export default function ForgotPassword() {

    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <Button
                variant="straight"
                childComponent={() => (
                    <Text
                        variant="normal"
                        value="Mot de passe oublié ?"
                        color={colors.label}
                    />
                )}
            />
        </View>
    )
}