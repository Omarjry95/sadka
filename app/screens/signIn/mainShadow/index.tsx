import * as React from 'react';
import styles from "@app/screens/signIn/styles";
import {View} from "react-native";

const MainShadow = () => (
    <View style={styles.shadowContainer}>
        <View style={styles.shadow} />
    </View>
)

export default MainShadow;