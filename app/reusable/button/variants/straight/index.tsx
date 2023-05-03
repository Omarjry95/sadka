import React, {useMemo} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from "react-native";
import {BaseStrictProps} from "@app/reusable/button/models";

const FULL_WIDTH_STYLE_VALUE: string = "100%";

export default function Straight({ width, minHeight, paddings, margins, onPress, ChildComponent }: BaseStrictProps) {

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
            style={{
                ...paddings,
                ...margins,
                ...alignCenterStyle,
                width,
                minHeight
            }}
            onPress={onPress}
        >
            <ChildComponent />
        </TouchableOpacity>
    )
}