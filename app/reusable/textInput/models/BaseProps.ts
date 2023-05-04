import {TextInputVariants} from "@app/reusable/textInput/models";
import {Spacing} from "@app/utilities/globalModels";

type BaseProps = {
    variant?: TextInputVariants,
    value: string,
    label?: string,
    hideChars?: boolean,
    padding?: Spacing,
    margin?: Spacing,
    size?: number,
    rightComponent?: () => JSX.Element,
    onChange: Function
}

export default BaseProps;