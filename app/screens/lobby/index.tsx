import React from 'react';
import {View} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import styles from "@app/screens/lobby/styles";
import {useTheme} from "@react-navigation/native";
import {Text} from "@app/reusable";
import Actions from "@app/screens/lobby/actions";
import GoBack from "@app/screens/lobby/goBack";

export default function Lobby() {

    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <MaterialIcons
                    name="verified"
                    color={colors.primary}
                    size={120}
                />

                <Text
                    variant="title"
                    value="Votre compte n'est pas encore vérifié"
                    margin={{ v: 20 }}
                    color="black"
                    size={24}
                    align="center"
                />

                <Text
                    variant="normal"
                    value={"Veuillez consulter votre boîte de réception afin de retrouver le courrier dans lequel nous vous avons envoyé le lien de vérification " +
                        "de votre compte. Si vous ne le retrouvez pas, utilisez le bouton ci-dessous pour le renvoyez."}
                    margin={{ b: 30 }}
                    color={colors.label}
                    align="center"
                />

                <Actions />
            </View>

            <GoBack />
        </View>
    )
}