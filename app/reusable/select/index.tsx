import React, {useMemo} from 'react';
import {BaseProps, BaseStrictProps} from "@app/reusable/select/models";
import { Modal } from "@app/reusable/select/variants";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";
import {getStyleBorder, getStyleBorderRadius} from "@app/utilities/border";

export default function Select({ variant, ...props }: BaseProps) {

    const { padding, margin, border,
        borderColor, borderRadius } = props;

    const SelectVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "modal":
            default:
                return Modal;
        }
    }, [variant]);

    const variantProps: BaseStrictProps = useMemo(() => (
        {
            ...props,
            paddings: getStylePadding(padding),
            margins: getStyleMargin(margin),
            borders: getStyleBorder(border),
            borderColor: borderColor ?? "white",
            radiuses: getStyleBorderRadius(borderRadius)
        }
    ), [props]);

    return (
        <SelectVariant {...variantProps} />
    )
}