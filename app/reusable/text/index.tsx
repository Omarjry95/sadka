import React, { useMemo } from 'react';
import { BaseProps, BaseStrictProps } from "@app/reusable/text/models";
import { Title, Span } from "@app/reusable/text/variants";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";

export default function Text({ variant, ...props }: BaseProps) {

    const { value, padding, margin, color, size, transform } = props;

    const TextVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "normal":
                return Span;
            case "title":
                return Title
            default:
                return Span
        }
    }, [variant]);

    const variantProps: BaseStrictProps = useMemo(() => {
        return {
            ...props,
            value: value ?? "",
            paddings: getStylePadding(padding),
            margins: getStyleMargin(margin),
            color: color ?? "white",
            size: size ?? 16,
            transform: transform ?? "none"
        }
    }, [props]);

    return (
        <TextVariant {...variantProps} />
    )
}