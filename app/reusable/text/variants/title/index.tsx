import React from 'react';
import { Text } from "react-native";
import styles from "@app/reusable/text/variants/title/styles";
import {BaseStrictProps} from "@app/reusable/text/models";

const Title = ({ value, paddings, margins, color, size, transform }: BaseStrictProps) => (
    <Text style={{
        ...styles.main,
        ...paddings,
        ...margins,
        color,
        fontSize: size,
        textTransform: transform
    }}>
        {value}
    </Text>
)

export default Title;