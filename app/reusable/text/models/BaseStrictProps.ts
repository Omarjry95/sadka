import { ColorValue } from "react-native/Libraries/StyleSheet/StyleSheet";
import {Margin, Padding} from "@app/utilities/globalModels";

type BaseStrictProps = {
    value: string,
    paddings: Padding,
    margins: Margin,
    color: ColorValue,
    size: number,
    transform: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

export default BaseStrictProps;