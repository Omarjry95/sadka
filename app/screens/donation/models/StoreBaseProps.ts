import {WsListSelectBaseProps} from "@app/api/models";
import {Dispatch, SetStateAction} from "react";

type StoreBaseProps = {
  list: WsListSelectBaseProps[],
  store: string | null,
  setStore: Dispatch<SetStateAction<string | null>>
}

export default StoreBaseProps;