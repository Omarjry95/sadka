import * as React from 'react';
import {Button, Divider, Text} from "@app/reusable";
import {Keyboard, View} from "react-native";
import styles from "@app/screens/signIn/gettingStarted/styles";
import {useTheme} from "@react-navigation/native";
import {BaseProps} from "@app/screens/signIn/gettingStarted/models";

export default function GettingStarted({ navigation }: BaseProps) {

    const { colors } = useTheme();

    const goToSignUp = (): void => {
        Keyboard.dismiss();

        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.container}>
            <Divider label="Vous n'êtes pas inscrit ?" />

            <Button
                variant="straight"
                width="100%"
                padding={{ t: 20, b: 10 }}
                childComponent={() => (
                    <Text
                        variant="normal"
                        value="Créer un compte"
                        color={colors.primary}
                    />
                )}
                onPress={goToSignUp}
            />
        </View>
    )
}