import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";
import {TextVariants} from "@app/reusable/text/models/index";
import {Spacing} from "@app/utilities/globalModels";

type BaseProps = {
    variant?: TextVariants,
    value?: string,
    padding?: Spacing,
    margin?: Spacing,
    color?: ColorValue,
    size?: number,
    transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

export default BaseProps;