import {MainStackParamList} from "@app/navigation/models";

type ActionBaseProps = {
  label: string,
  icon: () => JSX.Element,
  screen: keyof MainStackParamList
}

export default ActionBaseProps;