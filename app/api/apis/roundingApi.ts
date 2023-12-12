import {userProtectedApi} from "@app/api";
import {apiPrefixes} from "@app/api/constants";
import {WsGenericResponse, WsRoundingBaseProps} from "@app/api/models";

const roundingApi = userProtectedApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getRoundings: query<WsRoundingBaseProps[], void>({
      query: () => apiPrefixes.rounding,
      transformResponse: (response: WsGenericResponse<WsRoundingBaseProps[]>): WsRoundingBaseProps[] => response.body
    })
  }),
  overrideExisting: true
});

export const { useLazyGetRoundingsQuery } = roundingApi;