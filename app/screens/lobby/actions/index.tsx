import React, {useEffect} from 'react';
import {View} from "react-native";
import styles from "@app/screens/lobby/styles";
import {Button, Text} from "@app/reusable";
import {useTheme} from "@react-navigation/native";
import {useLazySendEmailVerificationLinkQuery} from "@app/api/apis/userApi";
import {useDispatch} from "react-redux";
import {hideLoading, showLoading} from "@app/global/globalSlice";

export default function Actions() {

    const { colors } = useTheme();

    const [sendEmailVerificationLink, { isLoading }] = useLazySendEmailVerificationLinkQuery();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(isLoading ? showLoading() : hideLoading());
    }, [isLoading]);

    return (
        <View style={styles.actionsContainer}>
            <Button
                variant="straight"
                width="100%"
                padding={{ a: 10 }}
                margin={{ b: 10 }}
                color={colors.border}
                borderRadius={{ a: 10 }}
                childComponent={() => (
                    <Text
                        variant="normal"
                        value="Renvoyer le lien de vérification de votre compte"
                        color="black"
                        align="center"
                    />
                )}
                onPress={() => sendEmailVerificationLink()}
            />

            <Button
                variant="gradient"
                padding={{ v: 20, h: 5 }}
                childComponent={() => (
                    <Text
                        variant="normal"
                        value="Confirmer"
                    />
                )}
            />
        </View>
    )
}