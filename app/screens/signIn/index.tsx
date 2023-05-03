import * as React from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from "react-native";
import styles from "./styles";
import {useTheme} from "@react-navigation/native";
import MainShadow from "@app/screens/signIn/mainShadow";
import Cover from "@app/screens/signIn/cover";
import Form from "@app/screens/signIn/form";
import ForgotPassword from "@app/screens/signIn/forgotPassword";
import GettingStarted from "@app/screens/signIn/gettingStarted";

export default function SignIn() {

    const { colors } = useTheme();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{
                ...styles.container,
                backgroundColor: colors.primary
            }}>
                <Cover />

                <MainShadow />

                <View style={styles.main}>
                    <View style={styles.wrapper}>
                        <Form />

                        <ForgotPassword />
                    </View>

                    <GettingStarted />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}