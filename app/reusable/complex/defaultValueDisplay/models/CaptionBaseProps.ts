import {Dispatch, SetStateAction} from "react";

type CaptionBaseProps = {
  disabled: boolean,
  setDisabled: Dispatch<SetStateAction<boolean>>,
  setDefaultValue: Function
}

export default CaptionBaseProps;