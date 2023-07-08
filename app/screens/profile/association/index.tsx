import React from 'react';
import {Select} from "@app/reusable";
import {View} from "react-native";
import styles from '../styles';

export default function Association() {

    return (
        <View style={styles.selectContainer}>
            <Select
                list={[]}
                label="Association par défaut"
                width="100%"
                padding={{ a: 10 }}
                border={{ a: 1 }}
                borderColor="black"
                borderRadius={{ a: 10 }}
            />
        </View>
    )
}