import React, {useMemo} from 'react';
import Base from "@app/reusable/dialog/base";
import {BaseProps} from "@app/reusable/dialog/models";
import {Success, Error} from "@app/reusable/dialog/variants";

export default function Dialog({ variant, mainAction, dialogBody, stateMessage,
                                   customActions = [] }: BaseProps) {

    const dialogVariant: (() => JSX.Element) | undefined = useMemo(() => {
        switch (variant) {
            case "success":
                return () => <Success message={stateMessage} />;
            case "error":
                return () => <Error message={stateMessage} />;
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
                overrideClassicAction={variant !== "normal" || customActions.length > 0}
                customActions={customActions}
            />
        ) : null
    )
}