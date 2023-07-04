import {GestureResponderEvent, StyleProp, ViewStyle} from "react-native";
import {Border, BorderRadius, Margin, Padding} from "@app/utilities/globalModels";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

type BaseStrictProps = {
    width?: string | number,
    height?: string | number,
    minHeight?: string | number,
    paddings: Padding,
    margins: Margin,
    color: ColorValue,
    borders: Border,
    borderColor: ColorValue,
    borderStyle: "solid" | "dotted" | "dashed",
    radiuses: BorderRadius,
    style: StyleProp<ViewStyle>,
    onPress?: (event: GestureResponderEvent) => void,
    ChildComponent: () => JSX.Element
}

export default BaseStrictProps;