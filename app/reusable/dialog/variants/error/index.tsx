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
            backgroundColor: colors.primary
        }}>
            <View style={{
                ...styles.iconContainer,
                backgroundColor: colors.primary
            }}>
                <FontAwesome
                    name="exclamation"
                    color="white"
                    size={16}
                />
            </View>

            <Text
                variant="normal"
                value={message ?? "Une erreur s'est produite lors du traitement de votre demande. Veuillez réessayer plus tard."}
                color="black"
            />
        </View>
    )
}