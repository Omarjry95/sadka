import React, { useMemo } from 'react';
import { LabelInside } from "@app/reusable/textInput/variants";
import {TextInputVariants} from "@app/reusable/textInput/models";

export default function TextInput({ variant }: { variant: TextInputVariants }) {

    const TextInputVariant: () => JSX.Element = useMemo(() => {
        switch (variant) {
            case "labelInside":
                return LabelInside;
            default:
                return LabelInside;
        }
    }, [variant]);

    return (
        <TextInputVariant />
    )
}