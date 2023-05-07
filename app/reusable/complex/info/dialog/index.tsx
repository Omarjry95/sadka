import React from 'react';
import {View, Modal} from "react-native";
import styles from "@app/reusable/complex/info/styles";
import {Button, Text} from "@app/reusable";
import {DialogProps} from "@app/reusable/complex/info/models";
import {useTheme} from "@react-navigation/native";
import Backdrop from "@app/reusable/complex/info/dialog/backdrop";

export default function Dialog({ visible, showDialog, DialogBody }: DialogProps) {

    const { colors } = useTheme();

    return (
        <Modal
            transparent
            visible={visible}
            animationType="fade"
            onRequestClose={() => showDialog(false)}
        >
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    {DialogBody && (
                        <DialogBody />
                    )}

                    <Button
                        variant="straight"
                        width="100%"
                        padding={{ v: 10 }}
                        color="white"
                        border={{ t: 1 }}
                        borderColor={colors.border}
                        borderRadius={{ b: 10 }}
                        onPress={() => showDialog(false)}
                        childComponent={() => (
                            <Text
                                variant="normal"
                                value="Fermer"
                                color="black"
                                align="center"
                            />
                        )}
                    />
                </View>

                <Backdrop showDialog={showDialog} />
            </View>
        </Modal>
    )
}