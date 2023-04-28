import * as React from 'react';
import {View} from "react-native";
import TextInput from "@app/reusable/textInput";
import styles from "@app/screens/signIn/form/styles";

export default function Form() {

    return (
        <View style={styles.container}>
            <TextInput variant="labelInside" />
        </View>
    )
}