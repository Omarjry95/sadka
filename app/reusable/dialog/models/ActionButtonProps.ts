import {GestureResponderEvent} from "react-native";

type ActionButtonProps = {
  onPress?: (event: GestureResponderEvent) => void,
  childComponent: () => JSX.Element
}

export default ActionButtonProps;