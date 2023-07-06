import React, { useMemo } from 'react';
import {LabelInside, Transparent} from "@app/reusable/textInput/variants";
import {BaseProps, BaseStrictProps} from "@app/reusable/textInput/models";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";
import {getStyleBorderRadius} from "@app/utilities/border";

export default function TextInput({ variant, ...props }: BaseProps) {

    const { label, hideChars, capitalizeChars, padding,
        margin, borderRadius, size, rightComponent,
        helpComponent } = props;

    const TextInputVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "transparent":
                return Transparent;
            case "labelInside":
            default:
                return LabelInside;
        }
    }, [variant]);

    const variantProps: BaseStrictProps = useMemo(() => {
        return {
            ...props,
            label: label ?? "",
            hideChars: hideChars ?? false,
            capitalizeChars: capitalizeChars ?? false,
            paddings: getStylePadding(padding),
            margins: getStyleMargin(margin),
            radiuses: getStyleBorderRadius(borderRadius),
            size: size ?? 16,
            RightComponent: rightComponent,
            HelpComponent: helpComponent
        }
    }, [props]);

    return (
        <TextInputVariant {...variantProps} />
    )
}