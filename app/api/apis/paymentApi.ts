import {userProtectedApi} from "@app/api";
import {apiPrefixes} from "@app/api/constants";
import {WsStripePublishableKeyBaseProps} from "@app/api/models";

const paymentApi = userProtectedApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getStripePublishableKey: query<WsStripePublishableKeyBaseProps, void>({ query: () => apiPrefixes.payment.concat('/publishable-key') })
  }),
  overrideExisting: true
});

export const { useLazyGetStripePublishableKeyQuery } = paymentApi;