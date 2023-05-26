type MutationError = {
    data: {
        code: number,
        message: string
    },
    status: number
}

export default MutationError;