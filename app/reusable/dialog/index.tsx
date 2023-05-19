import React, {useMemo} from 'react';
import Base from "@app/reusable/dialog/base";
import {BaseProps, StateVariantProps} from "@app/reusable/dialog/models";
import {Success, Error} from "@app/reusable/dialog/variants";

export default function Dialog({ variant, mainAction, dialogBody, stateMessage }: BaseProps) {

    const dialogVariant: (({ message }: StateVariantProps) => JSX.Element) | (() => JSX.Element) | undefined = useMemo(() => {
        switch (variant) {
            case "success":
                return ({ message: stateMessage }) => <Success message={stateMessage} />;
            case "error":
                return ({ message: stateMessage }) => <Error message={stateMessage} />;
            case "normal":
            default:
                return dialogBody;
        }
    }, [variant, dialogBody]);

    return (
        dialogVariant ? (
            <Base
                visible
                mainAction={mainAction}
                DialogBody={dialogVariant}
            />
        ) : null
    )
}