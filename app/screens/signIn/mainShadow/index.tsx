import * as React from 'react';
import styles from "@app/screens/signIn/styles";
import {View} from "react-native";

export default function MainShadow() {

    return (
        <View style={styles.shadowContainer}>
            <View style={styles.shadow} />
        </View>
    )
}