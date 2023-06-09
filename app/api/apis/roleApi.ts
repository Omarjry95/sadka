import { clientProtectedApi } from "@app/api";
import {WsRoleBaseProps} from "@app/api/models";

const roleApi = clientProtectedApi.injectEndpoints({
    endpoints: ({ query }) => ({
        getRoles: query<WsRoleBaseProps[], void>({ query: () => '/roles' })
    })
});

export const { useLazyGetRolesQuery } = roleApi;