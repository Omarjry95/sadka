import ButtonVariants from "@app/reusable/button/models/ButtonVariants";
import {GestureResponderEvent} from "react-native";
import {Spacing} from "@app/utilities/globalModels";

type BaseProps = {
    variant?: ButtonVariants,
    width?: string | number,
    minHeight?: string | number,
    padding?: Spacing,
    margin?: Spacing,
    onPress?: (event: GestureResponderEvent) => void,
    childComponent: () => JSX.Element
}

export default BaseProps;