import {GestureResponderEvent} from "react-native";
import {Margin, Padding} from "@app/utilities/globalModels";

type BaseStrictProps = {
    width?: string | number,
    minHeight?: string | number,
    paddings: Padding,
    margins: Margin,
    onPress?: (event: GestureResponderEvent) => void,
    ChildComponent: () => JSX.Element
}

export default BaseStrictProps;