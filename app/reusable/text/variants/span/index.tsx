import React from 'react';
import { Text } from "react-native";
import styles from "@app/reusable/text/variants/span/styles";
import {BaseStrictProps} from "@app/reusable/text/models";

export default function Span({ value, color, size, transform }: BaseStrictProps) {

    return (
        <Text style={{
            ...styles.main,
            color,
            fontSize: size,
            textTransform: transform
        }}>
            {value}
        </Text>
    )
}