type CurrentUserProps = {
    id: string,
    email: string,
    firstName?: string,
    lastName?: string,
    charityName?: string,
    photo?: string,
    role: number,
    defaultRounding?: string,
    defaultAssociation?: string
}

export default CurrentUserProps;