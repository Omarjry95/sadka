import {WsRoundingBaseProps} from "@app/api/models";
import {Dispatch, SetStateAction} from "react";

type RoundingBaseProps = {
  list: WsRoundingBaseProps[],
  rounding: string | null,
  defaultRounding: string | null,
  setRounding: Dispatch<SetStateAction<string | null>>
}

export default RoundingBaseProps;