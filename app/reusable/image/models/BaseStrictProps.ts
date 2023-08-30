import {ImageSourcePropType} from "react-native/Libraries/Image/Image";
import {ImageResizeMode} from "react-native";

type BaseStrictProps = {
    source: ImageSourcePropType,
    borderRadius?: number,
    fullWidth?: boolean,
    resizeMode: ImageResizeMode
}

export default BaseStrictProps;