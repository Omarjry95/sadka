import React from 'react';
import {View, Modal} from "react-native";
import styles from "@app/reusable/dialog/styles";
import {Button, Text} from "@app/reusable";
import {StrictBaseProps} from "@app/reusable/dialog/models";
import {useTheme} from "@react-navigation/native";
import Backdrop from "@app/reusable/dialog/backdrop";
import {EdgeInsets, useSafeAreaInsets} from "react-native-safe-area-context";

export default function Base({ visible, mainAction, DialogBody, overrideClassicAction }: StrictBaseProps) {

    const { colors } = useTheme();

    const insets: EdgeInsets = useSafeAreaInsets();

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={mainAction}
        >
            <View style={{
                ...styles.container,
                backgroundColor: colors.backdrop
            }}>
                <View style={{
                    ...styles.wrapper,
                    paddingTop: insets.top,
                    paddingBottom: insets.bottom + 80
                }}>
                    <DialogBody />

                    {!overrideClassicAction && (
                        <Button
                            variant="straight"
                            width="100%"
                            padding={{ v: 10 }}
                            color="white"
                            border={{ t: 1 }}
                            borderColor={colors.border}
                            borderRadius={{ b: 10 }}
                            onPress={mainAction}
                            childComponent={() => (
                                <Text
                                    variant="normal"
                                    value="Fermer"
                                    color="black"
                                    align="center"
                                />
                            )}
                        />
                    )}
                </View>

                <Backdrop onPress={mainAction} />
            </View>
        </Modal>
    )
}