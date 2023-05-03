import React, {useState} from 'react';
import {View} from "react-native";
import { Text, TextInput, Button } from "@app/reusable";
import styles from "@app/screens/signIn/form/styles";
import Entypo from '@expo/vector-icons/Entypo';
import {useTheme} from "@react-navigation/native";

export default function Form() {

    const [hiddenPasswordChars, hidePasswordChars] = useState<boolean>(true);

    const { colors } = useTheme();

    const passwordVisibilityToggler = (): JSX.Element => (
        <Button
            variant="straight"
            padding={{ a: 10 }}
            onPress={() => hidePasswordChars((hiddenPasswordChars) => !hiddenPasswordChars)}
            childComponent={() => (
                <Entypo
                    name="eye"
                    color={hiddenPasswordChars ? "black" : colors.primary}
                    size={16}
                />
            )}
        />
    )

    return (
        <View style={styles.container}>
            <TextInput
                variant="labelInside"
                padding={{ a: 10 }}
                margin={{ b: 30 }}
                label="Adresse éléctronique / Identifiant"
            />

            <TextInput
                hideChars={hiddenPasswordChars}
                variant="labelInside"
                padding={{ a: 10 }}
                margin={{ b: 30 }}
                label="Mot de passe"
                rightComponent={passwordVisibilityToggler}
            />

            <Button
                variant="gradient"
                padding={{ v: 20, h: 5 }}
                childComponent={() => (
                    <Text
                        variant="normal"
                        value="Se connecter"
                    />
                )}
            />
        </View>
    )
}