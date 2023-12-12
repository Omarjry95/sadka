import {userProtectedApi} from "@app/api";
import {apiPrefixes} from "@app/api/constants";
import {
  WsCreatePaymentRequestBaseProps,
  WsCreatePaymentResponseBaseProps, WsGenericResponse, WsRoleBaseProps,
  WsStripePublishableKeyBaseProps
} from "@app/api/models";

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
    getStripePublishableKey: query<WsStripePublishableKeyBaseProps, void>({ query: () => apiPrefixes.payment.concat('/publishable-key') })
  }),
  overrideExisting: true
});

export const { useCreatePaymentMutation, useLazyGetStripePublishableKeyQuery } = paymentApi;