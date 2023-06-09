import { clientProtectedApi, userProtectedApi } from "@app/api";
import {SuccessResponse, WsCreateUserBaseProps, WsUserDetailsBaseProps, WsUserDetailsRequestBaseProps} from "@app/api/models";

const userApiProtectedByClient = clientProtectedApi.injectEndpoints({
    endpoints: ({ mutation }) => ({
        createUser: mutation<SuccessResponse, WsCreateUserBaseProps>({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body
            })
        })
    })
});

const userApiProtectedByUser = userProtectedApi.injectEndpoints({
    endpoints: ({ mutation }) => ({
        getUserDetails: mutation<WsUserDetailsBaseProps, WsUserDetailsRequestBaseProps>({
            query: (body) => ({
                url: '/users/details',
                method: 'POST',
                body
            })
        })
    })
});

export const { useCreateUserMutation } = userApiProtectedByClient;

export const { useGetUserDetailsMutation } = userApiProtectedByUser;