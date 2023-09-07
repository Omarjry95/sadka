import React, { useMemo } from 'react';
import {LabelInside, Transparent} from "@app/reusable/textInput/variants";
import {BaseProps, BaseStrictProps} from "@app/reusable/textInput/models";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";
import {getStyleBorderRadius} from "@app/utilities/border";

export default function TextInput({ variant, ...props }: BaseProps) {

    const { label, hideChars, multiline, defaultNumberOfLines, capitalizeChars, numericKeyboard,
        padding, margin, borderRadius, size,
        align, rightComponent, helpComponent } = props;

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
            multiline: multiline ?? false,
            numberOfLines: defaultNumberOfLines,
            hideChars: hideChars ?? false,
            capitalizeChars: capitalizeChars ?? false,
            numericKeyboard: numericKeyboard ?? false,
            paddings: getStylePadding(padding),
            margins: getStyleMargin(margin),
            radiuses: getStyleBorderRadius(borderRadius),
            size: size ?? 16,
            align: align ?? "left",
            RightComponent: rightComponent,
            HelpComponent: helpComponent
        }
    }, [props]);

    return (
        <TextInputVariant {...variantProps} />
    )
}