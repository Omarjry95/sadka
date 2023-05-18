import React, {useMemo} from 'react';
import Base from "@app/reusable/dialog/base";
import {BaseProps} from "@app/reusable/dialog/models";

export default function Dialog({ variant, visible, mainAction, dialogBody }: BaseProps) {

    const dialogVariant: (() => JSX.Element) | undefined = useMemo(() => {
        switch (variant) {
            case "success":
            case "error":
            case "normal":
            default:
                return dialogBody;
        }
    }, [variant, dialogBody]);

    return (
        dialogVariant ? (
            <Base
                visible={visible}
                mainAction={mainAction}
                DialogBody={dialogVariant}
            />
        ) : null
    )
}