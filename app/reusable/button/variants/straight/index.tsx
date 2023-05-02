import React from 'react';
import {TouchableOpacity} from "react-native";
import styles from "@app/reusable/button/variants/straight/styles";
import {BaseStrictProps} from "@app/reusable/button/models";

export default function Straight({ paddings, margins, minHeight, ChildComponent, onPress }: BaseStrictProps) {

    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                ...paddings,
                ...margins,
                minHeight
            }}
            onPress={onPress}
        >
            <ChildComponent />
        </TouchableOpacity>
    )
}