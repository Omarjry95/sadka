import React, {PropsWithChildren} from 'react';
import {View} from "react-native";
import styles from "@app/utilities/rootView/styles";

export default function RootView({ children }: PropsWithChildren) {

    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}