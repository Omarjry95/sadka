import React from 'react';
import { Text } from "react-native";
import {BaseStrictProps} from "@app/reusable/text/models";

const Span = ({ value, paddings, margins, color, size, align, transform, position, positionCoords, italic }: BaseStrictProps) => (
    <Text style={{
        ...paddings,
        ...margins,
        fontFamily: italic ? "OpenSansItalic" : "OpenSans",
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