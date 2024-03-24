import { Dispatch, SetStateAction } from "react";
import {WsListSelectBaseProps} from "@app/api/models";

type AssociationBaseProps = {
    list: WsListSelectBaseProps[],
    defaultAssociation: string | null,
    setNewDefaultAssociation: Dispatch<SetStateAction<string | null>>
}

export default AssociationBaseProps;