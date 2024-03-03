import WsLastSetupCardBaseProps from "@app/api/models/WsLastSetupCardBaseProps";
import {Dispatch, SetStateAction} from "react";

type PaymentFormBaseProps = {
  label?: string,
  lastSetupCard?: WsLastSetupCardBaseProps,
  useLastCardSetup: boolean,
  setIsPaymentDataValid: Dispatch<SetStateAction<boolean>>,
  setUseLastCardSetup: Dispatch<SetStateAction<boolean>>
}

export default PaymentFormBaseProps;