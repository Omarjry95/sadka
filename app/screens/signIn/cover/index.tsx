import * as React from 'react';
import { View } from "react-native";
import styles from "@app/screens/signIn/styles";
import Text from '@app/reusable/text';

export default function Cover() {

    return (
        <View style={styles.cover}>
            <Text
                variant="title"
                value="Sadka"
                size={32}
                transform="uppercase"
            />
        </View>
    )
}