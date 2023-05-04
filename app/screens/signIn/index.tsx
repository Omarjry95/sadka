import * as React from 'react';
import {Animated, EmitterSubscription, Keyboard, TouchableWithoutFeedback, View} from "react-native";
import styles from "./styles";
import {useTheme} from "@react-navigation/native";
import MainShadow from "@app/screens/signIn/mainShadow";
import Cover from "@app/screens/signIn/cover";
import Form from "@app/screens/signIn/form";
import ForgotPassword from "@app/screens/signIn/forgotPassword";
import GettingStarted from "@app/screens/signIn/gettingStarted";
import {useEffect, useRef, useState} from "react";
import { onHideKeyboard, onShowKeyboard, removeKeyboardListeners } from "@app/utilities/keyboardListeners";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import CompositeAnimation = Animated.CompositeAnimation;

const ADDITIONAL_VPADDING: number = 15;

export default function SignIn() {

    const [isKeyboardHidden, setKeyboardHidden] = useState<boolean>(true);

    const minHeightAnimated: Animated.Value = useRef(new Animated.Value(72)).current;

    const { colors } = useTheme();

    const { top: safePaddingTop, bottom: safePaddingBottom } = useSafeAreaInsets();

    useEffect(() => {
        const onShowKeyboardListener: EmitterSubscription = onShowKeyboard(() => setKeyboardHidden(false));

        const onHideKeyboardListener: EmitterSubscription = onHideKeyboard(() => setKeyboardHidden(true));

        return () => removeKeyboardListeners([onShowKeyboardListener, onHideKeyboardListener]);
    }, []);

    useEffect(() => {
        const toggleMainContainer: CompositeAnimation = Animated.timing(minHeightAnimated, {
            toValue: isKeyboardHidden ? 72 : 100,
            duration: 100,
            useNativeDriver: false
        });

        toggleMainContainer.start();
    }, [isKeyboardHidden]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{
                ...styles.container,
                paddingBottom: isKeyboardHidden ? 10 : 0,
                backgroundColor: colors.primary
            }}>
                <Cover />

                <MainShadow />

                <Animated.View
                    style={{
                        ...styles.main,
                        height: minHeightAnimated.interpolate({
                            inputRange: [0, 100],
                            outputRange: ["0%", "100%"]
                        }),
                        paddingTop: safePaddingTop + ADDITIONAL_VPADDING,
                        paddingBottom: safePaddingBottom + ADDITIONAL_VPADDING
                    }}
                >
                    <View style={styles.wrapper}>
                        <Form />

                        <ForgotPassword />
                    </View>

                    {isKeyboardHidden && (<GettingStarted />)}
                </Animated.View>
            </View>
        </TouchableWithoutFeedback>
    )
}