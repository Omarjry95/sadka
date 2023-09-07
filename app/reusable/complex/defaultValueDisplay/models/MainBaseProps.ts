import {Corners} from "@app/utilities/globalModels";

type MainBaseProps = {
  disabled: boolean,
  borderRadius?: Corners,
  mainComponent: () => JSX.Element
}

export default MainBaseProps;