import DialogVariants from "@app/reusable/dialog/models/DialogVariants";

type BaseProps = {
    variant?: DialogVariants,
    mainAction: () => void,
    dialogBody?: () => JSX.Element,
    stateMessage?: string
}

export default BaseProps;