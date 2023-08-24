import React from 'react';
import {Button, Divider, Text} from "@app/reusable";
import {View} from "react-native";
import styles from "@app/screens/lobby/styles";
import {useTheme} from "@react-navigation/native";
import { signOut } from "firebase/auth";
import {firebaseAuth} from "../../../../firebaseConfig";
import {useDispatch} from "react-redux";
import {disconnectUser} from "@app/global/authSlice";
import {hideLoading, showLoading} from "@app/global/globalSlice";
import {removeUserBearerToken} from "@app/global/middlewareSlice";
import {removeUserDetails} from "@app/global/userSlice";

export default function GoBack() {

    const { colors } = useTheme();

    const dispatch = useDispatch();

    const goBack = (): void => {
        dispatch(showLoading());

        signOut(firebaseAuth)
            .then(() => {
                dispatch(removeUserBearerToken());
                dispatch(removeUserDetails());
                dispatch(disconnectUser());
            })
            .finally(() => dispatch(hideLoading()));
    }

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
                onPress={goBack}
            />
        </View>
    )
}