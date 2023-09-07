import {Dispatch, SetStateAction} from "react";
import {WsAssociationBaseProps} from "@app/api/models";

type AssociationBaseProps = {
  list: WsAssociationBaseProps[],
  association: string | null,
  defaultAssociation: string | null,
  setAssociation: Dispatch<SetStateAction<string | null>>
}

export default AssociationBaseProps;