import DialogVariants from "@app/reusable/dialog/models/DialogVariants";

type BaseProps = {
    variant?: DialogVariants,
    visible: boolean,
    mainAction: () => void,
    dialogBody?: () => JSX.Element
}

export default BaseProps;