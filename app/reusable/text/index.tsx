import React, { useMemo } from 'react';
import {BaseProps, BaseStrictProps, TextVariants} from "@app/reusable/text/models";
import { Title, Span } from "@app/reusable/text/variants";

export default function Text({ variant, ...props }: { variant: TextVariants } & BaseProps) {

    const TextVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "normal":
                return Span;
            case "title":
                return Title
            default:
                return Title
        }
    }, [variant]);

    const variantProps: BaseStrictProps = useMemo(() => {
        return {
            ...props,
            color: props.color ?? "white",
            size: props.size ?? 16,
            transform: props.transform ?? "none"
        }
    }, [props]);

    return (
        <TextVariant {...variantProps} />
    )
}