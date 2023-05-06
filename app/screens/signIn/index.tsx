import React, { useEffect, useState } from 'react';
import { EmitterSubscription, Keyboard, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import {useTheme} from "@react-navigation/native";
import MainShadow from "@app/screens/signIn/mainShadow";
import Cover from "@app/screens/signIn/cover";
import Form from "@app/screens/signIn/form";
import ForgotPassword from "@app/screens/signIn/forgotPassword";
import GettingStarted from "@app/screens/signIn/gettingStarted";
import { onHideKeyboard, onShowKeyboard, removeKeyboardListeners } from "@app/utilities/keyboardListeners";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {UnrestrictedStackParamList} from "@app/navigation/models";

const ADDITIONAL_VPADDING: number = 15;

export default function SignIn({ navigation }: NativeStackScreenProps<UnrestrictedStackParamList, 'SignIn'>) {

    const [isKeyboardHidden, setKeyboardHidden] = useState<boolean>(true);

    const { colors } = useTheme();

    const { top: safePaddingTop, bottom: safePaddingBottom } = useSafeAreaInsets();

    useEffect(() => {
        const onShowKeyboardListener: EmitterSubscription = onShowKeyboard(() => setKeyboardHidden(false));

        const onHideKeyboardListener: EmitterSubscription = onHideKeyboard(() => setKeyboardHidden(true));

        return () => removeKeyboardListeners([onShowKeyboardListener, onHideKeyboardListener]);
    }, []);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{
                ...styles.container,
                paddingBottom: isKeyboardHidden ? 10 : 0,
                backgroundColor: colors.primary
            }}>
                <Cover />

                <MainShadow />

                <View
                    style={{
                        ...styles.main,
                        height: isKeyboardHidden ? "72%" : "100%",
                        paddingTop: safePaddingTop + ADDITIONAL_VPADDING,
                        paddingBottom: safePaddingBottom + ADDITIONAL_VPADDING
                    }}
                >
                    <View style={styles.wrapper}>
                        <Form />

                        <ForgotPassword />
                    </View>

                    <GettingStarted navigation={navigation} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}