import React, {useMemo} from 'react';
import {BaseProps, BaseStrictProps} from "@app/reusable/image/models";
import {Water} from "@app/reusable/image/variants";

export default function Image({ variant, ...props }: BaseProps) {

    const { source } = props;

    const ImageVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "water":
            default:
                return Water;
        }
    }, [variant]);

    const variantProps: BaseStrictProps = useMemo(() => ({
        source: { uri: source }
    }), [props]);

    return (
        <ImageVariant {...variantProps} />
    )
}