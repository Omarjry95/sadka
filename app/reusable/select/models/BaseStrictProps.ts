import {Border, BorderRadius, Margin, Padding} from "@app/utilities/globalModels";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";
import ListItemProps from "@app/reusable/select/models/ListItemProps";

type BaseStrictProps = {
    list: ListItemProps[],
    label?: string,
    width?: string | number,
    paddings: Padding,
    margins: Margin,
    borders: Border,
    borderColor: ColorValue,
    radiuses: BorderRadius
}

export default BaseStrictProps;