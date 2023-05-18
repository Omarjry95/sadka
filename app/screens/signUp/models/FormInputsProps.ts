type FormInputsProps = {
    id?: string,
    label: string,
    value: string,
    hideChars?: boolean,
    rightComponent?: () => JSX.Element,
    helpComponent?: () => JSX.Element,
    onChange: Function
}

export default FormInputsProps;