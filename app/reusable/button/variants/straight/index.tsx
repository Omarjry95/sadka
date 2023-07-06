import React, {useMemo} from 'react';
import {LayoutChangeEvent, StyleProp, TouchableOpacity, ViewStyle} from "react-native";
import {BaseStrictProps} from "@app/reusable/button/models";

const FULL_WIDTH_STYLE_VALUE: string = "100%";

export default function Straight({ width, height, minHeight, paddings, margins, color, borders, borderColor, borderStyle, radiuses, position, onPress, style,
                                     ChildComponent }: BaseStrictProps) {

    const alignCenterStyle: StyleProp<ViewStyle> = useMemo(() => {

        let style: StyleProp<ViewStyle> = {};

        if (width === FULL_WIDTH_STYLE_VALUE) {
            Object.assign(style, {
                alignItems: "center",
                justifyContent: "center"
            });
        }

        return style;
    }, [width]);

    return (
        <TouchableOpacity
            style={[{
                ...paddings,
                ...margins,
                ...borders,
                ...radiuses,
                ...alignCenterStyle,
                width,
                height,
                minHeight,
                backgroundColor: color,
                borderColor,
                borderStyle,
                position
            }, style]}
            onPress={onPress}
        >
            <ChildComponent />
        </TouchableOpacity>
    )
}