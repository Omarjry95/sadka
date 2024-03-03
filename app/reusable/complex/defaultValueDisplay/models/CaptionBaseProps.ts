import {Dispatch, SetStateAction} from "react";

type CaptionBaseProps = {
  disabled: boolean,
  text: string,
  setDisabled: Dispatch<SetStateAction<boolean>>,
  setDefaultValue: Function
}

export default CaptionBaseProps;