import {SpacingAndBorder} from "@app/utilities/globalModels";
import {Dispatch, SetStateAction} from "react";
import wsLastSetupCardBaseProps from "@app/api/models/WsLastSetupCardBaseProps";

type PaymentFormBaseProps = {
  label?: string,
  margin?: SpacingAndBorder,
  borderWidth?: number,
  borderRadius?: number,
  size?: number,
  setIsPaymentDataValid: Dispatch<SetStateAction<boolean>>
}

export default PaymentFormBaseProps;