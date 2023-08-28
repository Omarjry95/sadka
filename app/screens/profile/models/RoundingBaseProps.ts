import {Dispatch, SetStateAction} from "react";
import {WsRoundingBaseProps} from "@app/api/models";

type RoundingBaseProps = {
  list: WsRoundingBaseProps[],
  rounding: string | null,
  setRounding: Dispatch<SetStateAction<string | null>>
}

export default RoundingBaseProps;