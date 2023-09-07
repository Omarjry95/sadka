import {Corners, SpacingAndBorder} from "@app/utilities/globalModels";

type DefaultValueDisplayBaseProps = {
  autoDisabled: boolean,
  margin?: SpacingAndBorder,
  borderRadius?: Corners,
  mainComponent: () => JSX.Element,
  setDefaultValue: Function
}

export default DefaultValueDisplayBaseProps;