import React, {useMemo} from 'react';
import {BaseProps, BaseStrictProps} from "@app/reusable/select/models";
import { Modal } from "@app/reusable/select/variants";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";

export default function Select({ variant, ...props }: BaseProps) {

    const { padding, margin, borderColor, borderRadius } = props;

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
            margins: getStyleMargin(margin)
        }
    ), [props]);

    return (
        <SelectVariant {...variantProps} />
    )
}