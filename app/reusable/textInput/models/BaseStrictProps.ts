import {BorderRadius, Margin, Padding} from "@app/utilities/globalModels";

type BaseStrictProps = {
    value: string,
    label: string,
    hideChars: boolean,
    capitalizeChars: boolean,
    numericKeyboard: boolean,
    paddings: Padding,
    margins: Margin,
    radiuses: BorderRadius,
    size: number,
    align: "auto" | "left" | "right" | "center" | "justify",
    RightComponent?: () => JSX.Element,
    HelpComponent?: () => JSX.Element,
    onChange: Function
}

export default BaseStrictProps;