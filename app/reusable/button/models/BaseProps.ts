import ButtonVariants from "@app/reusable/button/models/ButtonVariants";
import {GestureResponderEvent} from "react-native";
import {Corners, SpacingAndBorder} from "@app/utilities/globalModels";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

type BaseProps = {
    variant?: ButtonVariants,
    width?: string | number,
    minHeight?: string | number,
    padding?: SpacingAndBorder,
    margin?: SpacingAndBorder,
    color?: ColorValue,
    border?: SpacingAndBorder,
    borderColor?: ColorValue,
    borderRadius?: Corners,
    onPress?: (event: GestureResponderEvent) => void,
    childComponent: () => JSX.Element
}

export default BaseProps;