import {userProtectedApi} from "@app/api";
import {apiPrefixes} from "@app/api/constants";
import {WsRoundingBaseProps} from "@app/api/models";

const roundingApi = userProtectedApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getRoundings: query<WsRoundingBaseProps[], void>({ query: () => apiPrefixes.rounding })
  }),
  overrideExisting: true
});

export const { useLazyGetRoundingsQuery } = roundingApi;