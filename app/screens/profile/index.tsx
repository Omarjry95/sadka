import React from 'react';
import {View} from "react-native";
import styles from "@app/screens/profile/styles";
import Picture from "@app/screens/profile/picture";
import Name from "@app/screens/profile/name";
import Association from "@app/screens/profile/association";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RestrictedStackParamList} from "@app/navigation/models";

export default function Profile({ navigation }: NativeStackScreenProps<RestrictedStackParamList, 'Profile'>) {

    return (
        <View style={styles.container}>
            <Picture />

            <Name />

            <Association navigation={navigation} />
        </View>
    )
}