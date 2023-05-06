import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
import styles from "@app/screens/signUp/styles";
import {TextInput} from "@app/reusable";

export default function SignUp() {

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const []

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <ScrollView contentContainerStyle={{ paddingHorizontal: 15 }}>
                    <TextInput
                        variant="labelInside"
                        value={firstName}
                        padding={{ a: 10 }}
                        margin={{ b: 30 }}
                        label="Prénom"
                        onChange={setFirstName}
                    />

                    <TextInput
                        variant="labelInside"
                        value={lastName}
                        padding={{ a: 10 }}
                        margin={{ b: 30 }}
                        label="Nom"
                        onChange={setLastName}
                    />

                    <TextInput
                        variant="labelInside"
                        value={email}
                        padding={{ a: 10 }}
                        margin={{ b: 30 }}
                        label="Adresse éléctronique"
                        onChange={setEmail}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}