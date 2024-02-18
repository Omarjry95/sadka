import DialogVariants from "@app/reusable/dialog/models/DialogVariants";
import ActionButtonProps from "@app/reusable/dialog/models/ActionButtonProps";

type BaseProps = {
    variant?: DialogVariants,
    mainAction: () => void,
    dialogBody?: () => JSX.Element,
    stateMessage?: string,
    customActions?: ActionButtonProps[]
}

export default BaseProps;