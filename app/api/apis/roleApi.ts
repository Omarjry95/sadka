import { clientProtectedApi } from "@app/api";
import {WsGenericResponse, WsMiddlewareResponseBaseProps, WsRoleBaseProps} from "@app/api/models";
import {apiPrefixes} from "@app/api/constants";

const roleApi = clientProtectedApi.injectEndpoints({
    endpoints: ({ query }) => ({
        getRoles: query<WsRoleBaseProps[], void>({
            query: () => apiPrefixes.role,
            transformResponse: (response: WsGenericResponse<WsRoleBaseProps[]>): WsRoleBaseProps[] => response.body
        })
    }),
    overrideExisting: true
});

export const { useLazyGetRolesQuery } = roleApi;