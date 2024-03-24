import {userProtectedApi} from "@app/api";
import {WsGenericResponse, WsListSelectBaseProps} from "@app/api/models";
import {apiPrefixes} from "@app/api/constants";
import {getPhotoUrl} from "@app/utilities/photoUrlDownloader";

const storeApi = userProtectedApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getStores: query<WsListSelectBaseProps[], void>({
      query: () => apiPrefixes.store,
      transformResponse: async (value: WsGenericResponse<WsListSelectBaseProps[]>):
        Promise<WsListSelectBaseProps[]> => await getPhotoUrl(value.body)
    })
  })
});

export const { useLazyGetStoresQuery } = storeApi;