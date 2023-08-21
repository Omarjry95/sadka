import React from 'react';
import styles from "@app/screens/profile/styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {View} from "react-native";
import {useTheme} from "@react-navigation/native";

export default function EmptyPictureDisplay() {

    const { colors } = useTheme();

    return (
        <View style={{
            ...styles.buttonContainer,
            backgroundColor: colors.border
        }}>
            <MaterialIcons
                name="add-a-photo"
                color="black"
                size={42}
            />
        </View>
    )
}