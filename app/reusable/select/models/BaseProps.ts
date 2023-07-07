import { SelectVariants } from "@app/reusable/select/models";
import {Corners, SpacingAndBorder} from "@app/utilities/globalModels";
import {ColorValue} from "react-native/Libraries/StyleSheet/StyleSheet";

type BaseProps = {
    variant?: SelectVariants,
    width?: string | number,
    padding?: SpacingAndBorder,
    margin?: SpacingAndBorder,
    borderColor?: ColorValue,
    borderRadius?: Corners
}

export default BaseProps;