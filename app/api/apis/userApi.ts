import { clientProtectedApi, userProtectedApi } from "@app/api";
import {SuccessResponse, WsCreateUserBaseProps, WsUserDetailsBaseProps} from "@app/api/models";
import {apiPrefixes} from "@app/api/constants";
import WsAssociationBaseProps from "../models/WsAssociationBaseProps";

const userApiProtectedByClient = clientProtectedApi.injectEndpoints({
    endpoints: ({ mutation }) => ({
        createUser: mutation<SuccessResponse, WsCreateUserBaseProps>({
            query: (body) => ({
                url: apiPrefixes.user,
                method: 'POST',
                body
            })
        })
    })
});

const userApiProtectedByUser = userProtectedApi.injectEndpoints({
    endpoints: ({ query }) => ({
        getAssociations: query<WsAssociationBaseProps[], void>({
            query: () => apiPrefixes.user.concat('/associations')
        }),
        getUserDetails: query<WsUserDetailsBaseProps, void>({
            query: () => apiPrefixes.user.concat('/details')
        }),
        sendEmailVerificationLink: query<SuccessResponse, void>({
            query: () => apiPrefixes.user.concat('/send-email-verification-link')
        })
    })
});

export const { useCreateUserMutation } = userApiProtectedByClient;

export const { useGetAssociationsQuery, useLazyGetUserDetailsQuery,
    useLazySendEmailVerificationLinkQuery } = userApiProtectedByUser;