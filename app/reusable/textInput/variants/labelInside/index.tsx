import React from 'react';
import {TextInput, View} from "react-native";
import Text from '@app/reusable/text';
import styles from "@app/reusable/textInput/variants/labelInside/styles";

export default function LabelInside() {

    return (
        <View style={styles.container}>
            <Text
                variant="normal"
                value="Adresse éléctronique / Identifiant"
                color="black"
            />

            <TextInput />
        </View>
    )
}