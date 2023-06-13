import React, {useCallback, useEffect, useState} from 'react';
import {View} from "react-native";
import { Text, TextInput, Button } from "@app/reusable";
import styles from "@app/screens/signIn/form/styles";
import {useTheme} from "@react-navigation/native";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import {firebaseAuth} from "../../../../firebaseConfig";
import {useDispatch, useSelector} from "react-redux";
import {hideLoading, showLoading} from "@app/global/globalSlice";
import {PasswordVisibilityToggler} from "@app/reusable/complex";
import {allowUser} from "@app/global/authSlice";
import {useLazyGetUserDetailsQuery} from "@app/api/apis/userApi";
import {WsUserDetailsBaseProps} from "@app/api/models";
import {setUserDetails} from "@app/global/userSlice";
import {middlewareSelector, setUserBearerToken} from "@app/global/middlewareSlice";

export default function Form() {

    const [email, setEmail] = useState<string>("omarjry9@gmail.com");
    const [password, setPassword] = useState<string>("azerty");
    const [errorMessage, setError] = useState<string | undefined>(undefined);
    const [hiddenPasswordChars, hidePasswordChars] = useState<boolean>(true);

    const { userBearerToken } = useSelector(middlewareSelector);

    const [getUserDetails] = useLazyGetUserDetailsQuery();

    const dispatch = useDispatch();

    const { colors } = useTheme();

    useEffect(() => {
        setError(undefined);
    }, [email, password]);

    useEffect(() => {
        if (userBearerToken) {
            getUserDetails().unwrap()
                .then((userDetails: WsUserDetailsBaseProps) => {
                    dispatch(setUserDetails({
                        ...userDetails,
                        email
                    }));

                    dispatch(allowUser());
                })
                .catch(() => setError("Nous n'avons pas pu vous identifier. Veuillez réessayer."))
                .finally(() => dispatch(hideLoading()));
        }
    }, [userBearerToken]);

    const onSubmit = useCallback(async () => {
        setError(undefined);
        dispatch(showLoading());

        try {
            const userCredentials: UserCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);

            const { user } = userCredentials;

            if (user.emailVerified) {
                const authToken: string = await user.getIdToken();

                dispatch(setUserBearerToken(authToken));
            }
            else {
                // await sendEmailVerification(user);

                dispatch(hideLoading());
                setError("Votre compte n'est pas encore vérifié. Veuillez consulter votre boîte de réception afin de trouver le courrier électronique" +
                    " sur lequel nous vous avons envoyé le lien de vérification.");
            }
        }
        catch (e: any) {
            dispatch(hideLoading());
            setError("Nous n'avons pas pu vous identifier. Veuillez réessayer.");
        }
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

            {errorMessage && (
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