import {BorderRadius, Margin, Padding} from "@app/utilities/globalModels";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

type BaseStrictProps = {
    width?: string | number,
    paddings: Padding,
    margins: Margin,
    borderColor: ColorValue,
    radiuses: BorderRadius
}

export default BaseStrictProps;