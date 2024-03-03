import {Corners, SpacingAndBorder} from "@app/utilities/globalModels";

type DefaultValueDisplayBaseProps = {
  autoDisabled: boolean,
  captionText: string,
  margin?: SpacingAndBorder,
  borderRadius?: Corners,
  mainComponent: () => JSX.Element,
  alternateComponent?: () => JSX.Element,
  setDefaultValue: Function
}

export default DefaultValueDisplayBaseProps;