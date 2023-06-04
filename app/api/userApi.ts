import api from "@app/api/index";
import {SuccessResponse, WsCreateUserBaseProps, WsUserDetailsBaseProps, WsUserDetailsRequestBaseProps} from "@app/api/models";

const userApi = api.injectEndpoints({
    endpoints: ({ mutation, query }) => ({
        createUser: mutation<SuccessResponse, WsCreateUserBaseProps>({
            query: (body) => ({
                url: '/users',
                method: 'POST',
                body
            })
        }),
        getUserDetails: mutation<WsUserDetailsBaseProps, WsUserDetailsRequestBaseProps>({
            query: (body) => ({
                url: '/users/details',
                method: 'POST',
                body
            })
        })
    })
});

export const { useCreateUserMutation, useGetUserDetailsMutation } = userApi;