import { ListItemProps } from "@app/reusable/radioGroup/models";
import {SpacingAndBorder} from "@app/utilities/globalModels";
import RadioVariants from "@app/reusable/radioGroup/models/RadioVariants";

type BaseProps = {
    variant?: RadioVariants,
    list?: ListItemProps[],
    value: string,
    columns?: number,
    padding?: SpacingAndBorder,
    cellPadding?: SpacingAndBorder,
    margin?: SpacingAndBorder,
    cellMargin?: SpacingAndBorder,
    border?: SpacingAndBorder,
    labelSize?: number,
    labelTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
    setValue: Function
}

export default BaseProps;