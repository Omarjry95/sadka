import {Border, Margin, Padding} from "@app/utilities/globalModels";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

type BaseStrictProps = {
    selected: boolean,
    label: string,
    width: number,
    paddings: Padding,
    margins: Margin,
    borders: Border,
    selectionColor: ColorValue,
    labelSize: number,
    labelTransform: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
    setValue: () => void
}

export default BaseStrictProps;