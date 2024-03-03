import {Corners} from "@app/utilities/globalModels";

type MainBaseProps = {
  disabled: boolean,
  borderRadius?: Corners,
  mainComponent: () => JSX.Element,
  alternateComponent?: () => JSX.Element
}

export default MainBaseProps;