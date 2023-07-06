import React, { useMemo } from 'react';
import {BaseProps, BaseStrictProps} from "@app/reusable/button/models";
import { Straight, Gradient } from "@app/reusable/button/variants";
import { getStyleMargin, getStylePadding } from "@app/utilities/spacing";
import {getStyleBorder, getStyleBorderRadius} from "@app/utilities/border";

export default function Button({ variant, ...props }: BaseProps) {

    const { width, height, minHeight, padding,
        margin, color, border, borderColor,
        borderStyle, borderRadius, position, style,
        childComponent } = props;

    const ButtonVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "gradient":
                return Gradient
            case "straight":
            default:
                return Straight
        }
    }, [variant]);

    const variantProps: BaseStrictProps = useMemo(() => (
        {
            ...props,
            width,
            height,
            minHeight,
            paddings: getStylePadding(padding),
            margins: getStyleMargin(margin),
            color: color ?? 'transparent',
            borders: getStyleBorder(border),
            borderColor: borderColor ?? "white",
            borderStyle: borderStyle ?? "solid",
            radiuses: getStyleBorderRadius(borderRadius),
            style: style ?? {},
            ChildComponent: childComponent
        }
    ), [props]);

    return (
        <ButtonVariant {...variantProps} />
    )
}