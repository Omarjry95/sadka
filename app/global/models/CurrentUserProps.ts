type CurrentUserProps = {
    id: string,
    email: string,
    firstName?: string,
    lastName?: string,
    charityName?: string,
    picture?: string,
    role: number,
    defaultAssociation?: string
}

export default CurrentUserProps;