import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";
import {TextVariants} from "@app/reusable/text/models/index";
import {SpacingAndBorder} from "@app/utilities/globalModels";

type BaseProps = {
    variant?: TextVariants,
    value?: string,
    padding?: SpacingAndBorder,
    margin?: SpacingAndBorder,
    color?: ColorValue,
    size?: number,
    align?: "auto" | "left" | "right" | "center" | "justify",
    transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

export default BaseProps;