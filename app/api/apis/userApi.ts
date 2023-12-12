import { clientProtectedApi, userProtectedApi } from "@app/api";
import {SuccessResponse, WsCreateUserBaseProps, WsUserDetailsBaseProps} from "@app/api/models";
import {apiPrefixes} from "@app/api/constants";
import WsAssociationBaseProps from "../models/WsAssociationBaseProps";
import {getDownloadURL, getStorage, ref} from "firebase/storage";
import WsGenericResponse from "../models/WsGenericResponse";

const userApiProtectedByClient = clientProtectedApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    createUser: mutation<SuccessResponse, WsCreateUserBaseProps>({
      query: (body) => ({
        url: apiPrefixes.user,
        method: 'POST',
        body
      })
    })
  }),
  overrideExisting: true
});

const userApiProtectedByUser = userProtectedApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getAssociations: query<WsAssociationBaseProps[], void>({
      query: () => apiPrefixes.user.concat('/associations'),
      transformResponse: async (value: WsGenericResponse<WsAssociationBaseProps[]>): Promise<WsAssociationBaseProps[]> => {

        let { body } = value;

        for (let index: number = 0; index < body.length; index++) {
          let association: WsAssociationBaseProps = body[index];

          const { photoUrl } = association;

          if (photoUrl) {
            let downloadedPhotoUrl: string = await getDownloadURL(ref(getStorage(), photoUrl));

            body[index] = {
              ...association,
              photoUrl: downloadedPhotoUrl
            }
          }
        }

        return body;
      }
    }),
    getUserDetails: query<WsUserDetailsBaseProps, string>({
      query: () => apiPrefixes.user.concat('/details'),
      transformResponse: async (value: WsGenericResponse<WsUserDetailsBaseProps>, meta, email): Promise<WsUserDetailsBaseProps> => {

        const { body } = value;

        let { photo } = body;

        if (photo)
          photo = await getDownloadURL(ref(getStorage(), photo));

        return {
          ...body,
          photo,
          email
        };
      }
    }),
    sendEmailVerificationLink: query<SuccessResponse, void>({
      query: () => ({
        url: apiPrefixes.user.concat('/email-verification-link'),
        method: 'POST'
      })
    }),
    updateUser: mutation<SuccessResponse, FormData>({
      query: (body) => ({
        url: apiPrefixes.user,
        method: 'PUT',
        body
      })
    })
  }),
  overrideExisting: true
});

export const { useCreateUserMutation } = userApiProtectedByClient;

export const { useLazyGetAssociationsQuery, useLazyGetUserDetailsQuery,
  useLazySendEmailVerificationLinkQuery, useUpdateUserMutation } = userApiProtectedByUser;