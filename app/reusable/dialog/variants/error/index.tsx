import React from 'react';
import {View} from "react-native";
import styles from "@app/reusable/dialog/styles";
import {useTheme} from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {Text} from "@app/reusable";
import { StateVariantProps } from "../../models";

export default function Error({ message }: StateVariantProps) {

    const { colors } = useTheme();

    return (
        <View style={{
            ...styles.modalBody,
            backgroundColor: colors.primary,
            borderColor: colors.backdrop
        }}>
            <View style={{
                ...styles.iconContainer,
                backgroundColor: colors.primary,
                borderColor: colors.backdrop
            }}>
                <FontAwesome
                    name="exclamation"
                    color="white"
                    size={24}
                />
            </View>

            <Text
                variant="normal"
                value={message ?? "Une erreur s'est produite lors du traitement de votre demande. Veuillez réessayer plus tard."}
                color="white"
                align="center"
                position="relative"
                positioning={{ b: 20 }}
            />
        </View>
    )
}