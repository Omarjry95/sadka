import { clientProtectedApi, userProtectedApi } from "@app/api";
import {SuccessResponse, WsCreateUserBaseProps, WsUserDetailsBaseProps} from "@app/api/models";
import {apiPrefixes} from "@app/api/constants";
import WsAssociationBaseProps from "../models/WsAssociationBaseProps";
import {getDownloadURL, getStorage, ref} from "firebase/storage";

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
    endpoints: ({ query, mutation }) => ({
        getAssociations: query<WsAssociationBaseProps[], void>({
            query: () => apiPrefixes.user.concat('/associations'),
            transformResponse: async (value: WsAssociationBaseProps[]): Promise<WsAssociationBaseProps[]> => {
                for (let index: number = 0; index < value.length; index++) {
                    let association: WsAssociationBaseProps = value[index];

                    const { photoUrl } = association;

                    if (photoUrl) {
                        let downloadedPhotoUrl: string = await getDownloadURL(ref(getStorage(), photoUrl));

                        value[index] = {
                            ...association,
                            photoUrl: downloadedPhotoUrl
                        }
                    }
                }

                return value;
            }
        }),
        getUserDetails: query<WsUserDetailsBaseProps, string>({
            query: () => apiPrefixes.user.concat('/details'),
            transformResponse: async (value: WsUserDetailsBaseProps, meta, email): Promise<WsUserDetailsBaseProps> => {
                let { photo } = value;

                if (photo) { photo = await getDownloadURL(ref(getStorage(), photo)); }

                return {
                    ...value,
                    photo,
                    email
                };
            }
        }),
        sendEmailVerificationLink: query<SuccessResponse, void>({
            query: () => apiPrefixes.user.concat('/send-email-verification-link')
        }),
        updateUser: mutation<SuccessResponse, FormData>({
            query: (body) => ({
                url: apiPrefixes.user,
                method: 'PUT',
                body
            })
        })
    })
});

export const { useCreateUserMutation } = userApiProtectedByClient;

export const { useLazyGetAssociationsQuery, useLazyGetUserDetailsQuery,
    useLazySendEmailVerificationLinkQuery, useUpdateUserMutation } = userApiProtectedByUser;