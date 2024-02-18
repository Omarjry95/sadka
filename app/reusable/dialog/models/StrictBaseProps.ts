import {StateVariantProps} from "@app/reusable/dialog/models/index";
import ActionButtonProps from "@app/reusable/dialog/models/ActionButtonProps";

type StrictBaseProps = {
    visible: boolean,
    mainAction: () => void,
    DialogBody: (() => JSX.Element) | (({ message }: StateVariantProps) => JSX.Element),
    overrideClassicAction: boolean,
    customActions: ActionButtonProps[]
}

export default StrictBaseProps;