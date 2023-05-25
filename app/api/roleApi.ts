import api from "@app/api";
import {WsRoleBaseProps} from "@app/api/models";

const roleApi = api.injectEndpoints({
    endpoints: ({ query }) => ({
        getRoles: query<WsRoleBaseProps[], void>({ query: () => '/roless' })
    })
});

export const { useGetRolesQuery } = roleApi;