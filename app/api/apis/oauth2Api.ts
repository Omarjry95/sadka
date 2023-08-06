import { middlewareApi } from "@app/api";
import {WsMiddlewareResponseBaseProps} from "@app/api/models";
import Constants from "expo-constants";


const oauth2Api = middlewareApi.injectEndpoints({
    endpoints: ({ mutation }) => ({
        getClientCredentialsBearerToken: mutation<WsMiddlewareResponseBaseProps, void>({
            query: () => ({
                url: '/',
                method: 'POST',
                body: {
                    client_id: Constants.expoConfig?.extra?.oauth2ClientId,
                    client_secret: Constants.expoConfig?.extra?.oauth2ClientSecret,
                    audience: Constants.expoConfig?.extra?.oauth2Audience,
                    grant_type: Constants.expoConfig?.extra?.oauth2GrantType,
                    scope: "unrestricted"
                }
            })
        })
    })
});

export const { useGetClientCredentialsBearerTokenMutation } = oauth2Api;