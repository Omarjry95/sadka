import { ColorValue } from "react-native/Libraries/StyleSheet/StyleSheet";
import {Margin, Padding, PositionCoords} from "@app/utilities/globalModels";

type BaseStrictProps = {
    value: string,
    paddings: Padding,
    margins: Margin,
    color: ColorValue,
    size: number,
    align: "auto" | "left" | "right" | "center" | "justify",
    transform: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
    position: 'relative' | 'absolute',
    positionCoords: PositionCoords
}

export default BaseStrictProps;