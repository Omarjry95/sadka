import {Margin, Padding} from "@app/utilities/globalModels";

type BaseStrictProps = {
    value: string,
    label: string,
    hideChars: boolean,
    paddings: Padding,
    margins: Margin,
    size: number,
    RightComponent?: () => JSX.Element,
    HelpComponent?: () => JSX.Element,
    onChange: Function
}

export default BaseStrictProps;