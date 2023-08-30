import { ImageVariants } from "@app/reusable/image/models";
import {ImageResizeMode} from "react-native";

type BaseProps = {
    variant?: ImageVariants,
    source: string,
    borderRadius?: number,
    fullWidth?: boolean,
    resizeMode?: ImageResizeMode
}

export default BaseProps;