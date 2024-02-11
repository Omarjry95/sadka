type WsCreatePaymentRequestBaseProps = {
  originalAmount: number,
  association: string,
  paymentMethodId: string,
  note?: string
};

export default WsCreatePaymentRequestBaseProps;