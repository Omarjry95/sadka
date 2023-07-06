import React, {useMemo} from 'react';
import {BaseProps, BaseStrictProps} from "@app/reusable/select/models";
import { Modal } from "@app/reusable/select/variants";

export default function Select({ variant, ...props }: BaseProps) {

    const {  } = props;

    const SelectVariant: (_props: BaseStrictProps) => JSX.Element = useMemo(() => {
        switch (variant) {
            case "modal":
            default:
                return Modal;
        }
    }, [variant]);

    const variantProps: BaseStrictProps = useMemo(() => (
        {

        }
    ), [props]);

    return (
        <SelectVariant {...variantProps} />
    )
}