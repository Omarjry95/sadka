import {TextInputVariants} from "@app/reusable/textInput/models";
import {Corners, SpacingAndBorder} from "@app/utilities/globalModels";

type BaseProps = {
    variant?: TextInputVariants,
    value: string,
    label?: string,
    hideChars?: boolean,
    capitalizeChars?: boolean,
    numericKeyboard?: boolean,
    padding?: SpacingAndBorder,
    margin?: SpacingAndBorder,
    borderRadius?: Corners,
    size?: number,
    align?: "auto" | "left" | "right" | "center" | "justify",
    rightComponent?: () => JSX.Element,
    helpComponent?: () => JSX.Element,
    onChange: Function
}

export default BaseProps;