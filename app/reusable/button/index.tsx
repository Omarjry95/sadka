import React, {useMemo} from 'react';
import {BaseProps, BaseStrictProps} from "@app/reusable/button/models";
import {Straight} from "@app/reusable/button/variants";
import {getStyleMargin, getStylePadding} from "@app/utilities/spacing";

export default function Button({ variant, ...props }: BaseProps) {

    const { padding, margin, minHeight, childComponent } = props;

    const ButtonVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "gradient":
                return Straight
            case "straight":
                return Straight
            default:
                return Straight
        }
    }, [variant]);

    const variantProps: BaseStrictProps = useMemo(() => {
        return {
            ...props,
            paddings: getStylePadding(padding),
            margins: getStyleMargin(margin),
            minHeight,
            ChildComponent: childComponent
        }
    }, [props]);

    return (
        <ButtonVariant {...variantProps} />
    )
}