type MutationError = {
    data: {
        _code: string,
        _message: string
    },
    status: number
}

export default MutationError;