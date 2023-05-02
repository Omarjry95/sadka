import {TextInputVariants} from "@app/reusable/textInput/models";
import {Spacing} from "@app/utilities/globalModels";

type BaseProps = {
    variant?: TextInputVariants,
    label?: string,
    hideChars?: boolean,
    padding?: Spacing,
    margin?: Spacing,
    size?: number,
    rightComponent?: () => JSX.Element
}

export default BaseProps;