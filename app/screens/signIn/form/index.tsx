import React, {useCallback, useEffect, useState} from 'react';
import {View} from "react-native";
import { Text, TextInput, Button } from "@app/reusable";
import styles from "@app/screens/signIn/form/styles";
import {useTheme} from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import {firebaseAuth} from "../../../../firebaseConfig";
import {useDispatch} from "react-redux";
import {hideLoading, showLoading} from "@app/global/globalSlice";
import {PasswordVisibilityToggler} from "@app/reusable/complex";

export default function Form() {

    const [email, setEmail] = useState<string>("omarjry9@gmail.com");
    const [password, setPassword] = useState<string>("azerty");
    const [errorShown, showError] = useState<boolean>(false);
    const [hiddenPasswordChars, hidePasswordChars] = useState<boolean>(true);

    const { colors } = useTheme();

    const dispatch = useDispatch();

    useEffect(() => {
        showError(false);
    }, [email, password])

    const onSubmit = useCallback(() => {
        showError(false);
        dispatch(showLoading());

        signInWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => console.log(userCredential.user))
            .catch(() => showError(true))
            .finally(() => dispatch(hideLoading()));
    }, [email, password, firebaseAuth]);

    return (
        <View style={styles.container}>
            <TextInput
                variant="labelInside"
                value={email}
                padding={{ a: 10 }}
                margin={{ b: 30 }}
                label="Adresse éléctronique"
                onChange={setEmail}
            />

            <TextInput
                variant="labelInside"
                value={password}
                hideChars={hiddenPasswordChars}
                padding={{ a: 10 }}
                margin={{ b: 30 }}
                label="Mot de passe"
                rightComponent={() => (
                    <PasswordVisibilityToggler
                        areCharsHidden={hiddenPasswordChars}
                        toggleChars={() => hidePasswordChars(hiddenChars => !hiddenChars)}
                    />)}
                onChange={setPassword}
            />

            {errorShown && (
                <Text
                    variant="normal"
                    value="Nous n'avons pas pu vous identifier. Veuillez réessayer."
                    margin={{ b: 30 }}
                    color={colors.primary}
                    align="center"
                />
            )}

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