interface WsGenericResponse<T> {
  message: string,
  body: T
}

export default WsGenericResponse;