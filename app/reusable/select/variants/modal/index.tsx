import React from 'react';
import {BaseStrictProps} from "@app/reusable/select/models";
import {View} from "react-native";

export default function Modal({ width, paddings, margins }: BaseStrictProps) {

    return (
        <View style={{
            ...paddings,
            ...margins,
            width
        }}>

        </View>
    )
}