import React from 'react';
import {View} from "react-native";
import styles from "@app/reusable/dialog/styles";
import {useTheme} from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";
import {Text} from "@app/reusable";
import { StateVariantProps } from "../../models";

export default function Success({ message }: StateVariantProps) {

    const { colors } = useTheme();

    return (
        <View style={{
            ...styles.modalBody,
            backgroundColor: colors.success
        }}>
            <View style={{
                ...styles.iconContainer,
                backgroundColor: colors.success
            }}>
                <Entypo
                    name="check"
                    color="white"
                    size={16}
                />
            </View>

            <Text
                variant="normal"
                value={message ?? "Votre demande a été traitée avec succès."}
                color="black"
            />
        </View>
    )
}