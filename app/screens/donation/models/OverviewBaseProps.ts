import {WsRoundingBaseProps} from "@app/api/models";

type OverviewBaseProps = {
  amount: string,
  rounding: string,
  roundings: WsRoundingBaseProps[]
}

export default OverviewBaseProps;