import React, {useState} from 'react';
import Entypo from "@expo/vector-icons/Entypo";
import {Button, Text} from "@app/reusable";
import {useTheme} from "@react-navigation/native";
import {Modal, TouchableOpacity, View} from "react-native";
import styles from "@app/reusable/complex/info/styles";
import {BaseProps} from "@app/reusable/complex/info/models";

export default function Info({ ModalBody }: BaseProps) {

    const [infoVisible, showInfo] = useState<boolean>(false);

    const { colors } = useTheme();

    return (
        <React.Fragment>
            <Button
                variant="straight"
                margin={{ l: 10 }}
                onPress={() => showInfo(true)}
                childComponent={() => (
                    <Entypo
                        name="info-with-circle"
                        color={colors.label}
                        size={16}
                    />
                )}
            />

            <Modal
                transparent
                visible={infoVisible}
                animationType="fade"
                onRequestClose={() => showInfo(false)}
            >
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        {ModalBody && (
                            <ModalBody />
                        )}

                        <Button
                            variant="straight"
                            width="100%"
                            padding={{ v: 10 }}
                            color="white"
                            border={{ t: 1 }}
                            borderColor={colors.border}
                            borderRadius={{ b: 10 }}
                            onPress={() => showInfo(false)}
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

                    <TouchableOpacity
                        style={styles.pressableBackdrop}
                        activeOpacity={1}
                        onPress={() => showInfo(false)}
                    />
                </View>
            </Modal>
        </React.Fragment>
    )
}