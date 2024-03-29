import {Corners} from "@app/utilities/globalModels";

type MainBaseProps = {
  disabled: boolean,
  borderRadius?: Corners,
  mainComponent: (() => JSX.Element) | JSX.Element,
  alternateComponent?: (() => JSX.Element) | JSX.Element
}

export default MainBaseProps;