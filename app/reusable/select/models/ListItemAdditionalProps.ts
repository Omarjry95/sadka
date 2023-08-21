import {Padding} from "@app/utilities/globalModels";

type ListItemAdditionalProps = {
    paddings: Padding,
    selected?: boolean,
    disabled: boolean,
    setValue?: Function,
    index: number
}

export default ListItemAdditionalProps;