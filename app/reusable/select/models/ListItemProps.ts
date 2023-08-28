type ListItemProps = {
    id: string | number | null,
    label: string,
    leftComponent?: () => JSX.Element,
    bottomComponent?: () => JSX.Element
}

export default ListItemProps;