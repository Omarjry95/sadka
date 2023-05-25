import React from 'react';
import { Text } from "react-native";
import styles from "@app/reusable/text/variants/span/styles";
import {BaseStrictProps} from "@app/reusable/text/models";

const Span = ({ value, paddings, margins, color, size, align, transform, position, positionCoords }: BaseStrictProps) => (
    <Text style={{
        ...styles.main,
        ...paddings,
        ...margins,
        color,
        fontSize: size,
        textAlign: align,
        textTransform: transform,
        position,
        ...positionCoords
    }}>
        {value}
    </Text>
)

export default Span;