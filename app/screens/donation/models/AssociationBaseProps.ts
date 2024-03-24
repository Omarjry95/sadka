import {Dispatch, SetStateAction} from "react";
import {WsListSelectBaseProps} from "@app/api/models";

type AssociationBaseProps = {
  list: WsListSelectBaseProps[],
  association: string | null,
  defaultAssociation: string | null,
  setAssociation: Dispatch<SetStateAction<string | null>>
}

export default AssociationBaseProps;