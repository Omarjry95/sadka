import React from 'react';
import {View} from "react-native";
import styles from "@app/screens/profile/styles";
import Picture from "@app/screens/profile/picture";
import Name from "@app/screens/profile/name";
import Association from "@app/screens/profile/association";

export default function Profile() {

    return (
        <View style={styles.container}>
            <Picture />

            <Name />

            <Association />
        </View>
    )
}