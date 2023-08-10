import {ImageSourcePropType} from "react-native/Libraries/Image/Image";

type BaseStrictProps = {
    source: ImageSourcePropType,
    borderRadius?: number,
    fullWidth?: boolean
}

export default BaseStrictProps;