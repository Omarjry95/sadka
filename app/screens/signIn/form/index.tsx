import React, {useCallback, useState} from 'react';
import {View} from "react-native";
import { Text, TextInput, Button } from "@app/reusable";
import styles from "@app/screens/signIn/form/styles";
import Entypo from '@expo/vector-icons/Entypo';
import {useTheme} from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import {firebaseAuth} from "../../../../firebaseConfig";

export default function Form() {

    const [email, setEmail] = useState<string>("omarjry9@gmail.com");
    const [password, setPassword] = useState<string>("azerty");
    const [hiddenPasswordChars, hidePasswordChars] = useState<boolean>(true);

    const { colors } = useTheme();

    const onSubmit = useCallback(() => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [email, password, firebaseAuth]);

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
                value={email}
                padding={{ a: 10 }}
                margin={{ b: 30 }}
                label="Adresse éléctronique / Identifiant"
                onChange={setEmail}
            />

            <TextInput
                variant="labelInside"
                value={password}
                hideChars={hiddenPasswordChars}
                padding={{ a: 10 }}
                margin={{ b: 30 }}
                label="Mot de passe"
                rightComponent={passwordVisibilityToggler}
                onChange={setPassword}
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
                onPress={onSubmit}
            />
        </View>
    )
}