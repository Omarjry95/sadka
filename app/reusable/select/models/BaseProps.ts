import { SelectVariants } from "@app/reusable/select/models";
import {Corners, SpacingAndBorder} from "@app/utilities/globalModels";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";
import ListItemProps from "@app/reusable/select/models/ListItemProps";

type BaseProps = {
    variant?: SelectVariants,
    list: ListItemProps[],
    value: string | number | null,
    label?: string,
    width?: string | number,
    padding?: SpacingAndBorder,
    margin?: SpacingAndBorder,
    border?: SpacingAndBorder,
    borderColor?: ColorValue,
    borderRadius?: Corners,
    setValue: Function
}

export default BaseProps;