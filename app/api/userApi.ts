import api from "@app/api/index";
import {SuccessResponse, WsCreateUserBaseProps} from "@app/api/models";

const userApi = api.injectEndpoints({
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

export const { useCreateUserMutation } = userApi;