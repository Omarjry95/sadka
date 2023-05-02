import {Margin, Padding} from "@app/utilities/globalModels";

type BaseStrictProps = {
    label: string,
    hideChars: boolean,
    paddings: Padding,
    margins: Margin,
    size: number,
    RightComponent?: () => JSX.Element
}

export default BaseStrictProps;