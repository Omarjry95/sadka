import {StateVariantProps} from "@app/reusable/dialog/models/index";

type StrictBaseProps = {
    visible: boolean,
    mainAction: () => void,
    DialogBody: (() => JSX.Element) | (({ message }: StateVariantProps) => JSX.Element),
    displayActionButton: boolean
}

export default StrictBaseProps;