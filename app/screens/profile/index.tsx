import React from 'react';
import {View} from "react-native";
import styles from "@app/screens/profile/styles";
import Picture from "@app/screens/profile/picture";

export default function Profile() {

    return (
        <View style={styles.container}>
            <Picture />
        </View>
    )
}