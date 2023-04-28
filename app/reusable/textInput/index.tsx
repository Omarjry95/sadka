import React, { useMemo } from 'react';
import { LabelInside } from "@app/reusable/textInput/variants";
import {BaseProps, BaseStrictProps} from "@app/reusable/textInput/models";

export default function TextInput({ variant, ...props }: BaseProps) {

    const { label, size } = props;

    const TextInputVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "labelInside":
                return LabelInside;
            default:
                return LabelInside;
        }
    }, [variant]);

    const variantProps: BaseStrictProps = useMemo(() => {
        return {
            ...props,
            label: label ?? "",
            size: size ?? 16
        }
    }, [props]);

    return (
        <TextInputVariant {...variantProps} />
    )
}