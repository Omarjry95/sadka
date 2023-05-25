import React, { useMemo } from 'react';
import { BaseProps, BaseStrictProps } from "@app/reusable/text/models";
import { Title, Span } from "@app/reusable/text/variants";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";
import {getStylePosition} from "@app/utilities/position";

export default function Text({ variant, ...props }: BaseProps) {

    const { value, padding, margin, color, size, align, transform, position, positioning = {} } = props;

    const TextVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "title":
                return Title;
            case "normal":
            default:
                return Span;
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
            align: align ?? "left",
            transform: transform ?? "none",
            position: position ?? 'relative',
            positionCoords: getStylePosition(positioning)
        }
    }, [props]);

    return (
        <TextVariant {...variantProps} />
    )
}