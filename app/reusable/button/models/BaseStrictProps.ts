import {GestureResponderEvent} from "react-native";
import {Margin, Padding} from "@app/utilities/globalModels";

type BaseStrictProps = {
    paddings: Padding,
    margins: Margin,
    minHeight?: string | number,
    onPress?: (event: GestureResponderEvent) => void,
    ChildComponent: () => JSX.Element
}

export default BaseStrictProps;