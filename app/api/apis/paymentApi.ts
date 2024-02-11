import {userProtectedApi} from "@app/api";
import {apiPrefixes} from "@app/api/constants";
import {
  WsCreatePaymentRequestBaseProps,
  WsCreatePaymentResponseBaseProps,
  WsGenericResponse,
  WsStripePublishableKeyBaseProps
} from "@app/api/models";
import WsConfirmPaymentRequestBaseProps from "@app/api/models/WsConfirmPaymentRequestBaseProps";
import WsConfirmPaymentResponseBaseProps from "../models/WsConfirmPaymentResponseBaseProps";

const paymentApi = userProtectedApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    createPayment: mutation<WsCreatePaymentResponseBaseProps, WsCreatePaymentRequestBaseProps>({
      query: (body) => ({
        url: apiPrefixes.payment,
        method: 'POST',
        body
      }),
      transformResponse: (response: WsGenericResponse<WsCreatePaymentResponseBaseProps>): WsCreatePaymentResponseBaseProps => response.body
    }),
    confirmPayment: mutation<WsConfirmPaymentResponseBaseProps, WsConfirmPaymentRequestBaseProps>({
      query: (body) => ({
        url: apiPrefixes.payment.concat("/confirm"),
        method: 'POST',
        body
      }),
      transformResponse: (response: WsGenericResponse<WsConfirmPaymentResponseBaseProps>): WsConfirmPaymentResponseBaseProps => response.body
    }),
    getStripePublishableKey: query<WsStripePublishableKeyBaseProps, void>({
      query: () => apiPrefixes.payment.concat('/publishable-key'),
      transformResponse: (response: WsGenericResponse<WsStripePublishableKeyBaseProps>): WsStripePublishableKeyBaseProps => response.body
    })
  }),
  overrideExisting: true
});

export const { useCreatePaymentMutation,
  useLazyGetStripePublishableKeyQuery ,
  useConfirmPaymentMutation
} = paymentApi;