import { clientProtectedApi } from "@app/api";
import {WsRoleBaseProps} from "@app/api/models";
import {apiPrefixes} from "@app/api/constants";

const roleApi = clientProtectedApi.injectEndpoints({
    endpoints: ({ query }) => ({
        getRoles: query<WsRoleBaseProps[], void>({ query: () => apiPrefixes.role })
    }),
    overrideExisting: true
});

export const { useLazyGetRolesQuery } = roleApi;