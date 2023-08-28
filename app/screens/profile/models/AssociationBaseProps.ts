import { Dispatch, SetStateAction } from "react";
import {WsAssociationBaseProps} from "@app/api/models";

type AssociationBaseProps = {
    list: WsAssociationBaseProps[],
    defaultAssociation: string | null,
    setNewDefaultAssociation: Dispatch<SetStateAction<string | null>>
}

export default AssociationBaseProps;