import {TextInputVariants} from "@app/reusable/textInput/models";
import {SpacingAndBorder} from "@app/utilities/globalModels";

type BaseProps = {
    variant?: TextInputVariants,
    value: string,
    label?: string,
    hideChars?: boolean,
    padding?: SpacingAndBorder,
    margin?: SpacingAndBorder,
    size?: number,
    rightComponent?: () => JSX.Element,
    helpComponent?: () => JSX.Element,
    onChange: Function
}

export default BaseProps;