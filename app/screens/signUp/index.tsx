import React from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
import styles from "@app/screens/signUp/styles";
import {useTheme} from "@react-navigation/native";
import { Text } from "../../reusable";
import Form from "@app/screens/signUp/form";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {UnrestrictedStackParamList} from "@app/navigation/models";

export default function SignUp({ navigation }: NativeStackScreenProps<UnrestrictedStackParamList, 'SignUp'>) {

    const { colors } = useTheme();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView contentContainerStyle={styles.scrollable}>
                    <Text
                        variant="title"
                        value="Bienvenue chez SADKA"
                        margin={{ b: 10 }}
                        color="black"
                        size={24}
                        align="center"
                    />

                    <Text
                        variant="normal"
                        value="Saisissez vos données personnelles afin de vous créer un compte."
                        margin={{ b: 10 }}
                        color={colors.label}
                        align="center"
                    />

                    <Text
                        variant="normal"
                        value="(Tous les champs sont obligatoires.)"
                        margin={{ b: 30 }}
                        color={colors.label}
                        align="center"
                    />

                    <Form navigation={navigation} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}