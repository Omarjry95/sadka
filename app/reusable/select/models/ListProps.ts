import { ListItemProps } from "@app/reusable/select/models";
import { Padding } from "@app/utilities/globalModels";

type ListProps = {
    list: ListItemProps[],
    selectedId: string | number | null,
    paddings: Padding,
    setValue: Function
}

export default ListProps;