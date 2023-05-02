import ButtonVariants from "@app/reusable/button/models/ButtonVariants";
import {GestureResponderEvent} from "react-native";
import {Spacing} from "@app/utilities/globalModels";

type BaseProps = {
    variant?: ButtonVariants,
    padding?: Spacing,
    margin?: Spacing,
    minHeight?: string | number,
    onPress?: (event: GestureResponderEvent) => void,
    childComponent: () => JSX.Element
}

export default BaseProps;