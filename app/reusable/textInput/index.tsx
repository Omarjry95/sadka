import React, { useMemo } from 'react';
import { LabelInside } from "@app/reusable/textInput/variants";
import {BaseProps, BaseStrictProps} from "@app/reusable/textInput/models";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";

export default function TextInput({ variant, ...props }: BaseProps) {

    const { label, hideChars, padding, margin, size, rightComponent } = props;

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
            hideChars: hideChars ?? false,
            paddings: getStylePadding(padding),
            margins: getStyleMargin(margin),
            size: size ?? 16,
            RightComponent: rightComponent
        }
    }, [props]);

    return (
        <TextInputVariant {...variantProps} />
    )
}