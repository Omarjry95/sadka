type WsCreatePaymentBaseProps = {
  amount: number,
  paymentMethodId: string
};

type WsConfirmPaymentBaseProps = {
  paymentIntentId: string
};

type WsCreatePaymentRequestBaseProps = WsCreatePaymentBaseProps | WsConfirmPaymentBaseProps;

export default WsCreatePaymentRequestBaseProps;