import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Constants from "expo-constants";
import {AUTHORIZATION_HEADER_KEY, AUTHORIZATION_HEADER_PREFIX} from "@app/api/constants";

export default createApi({
    reducerPath: 'clientApi',
    baseQuery: fetchBaseQuery({
        baseUrl: Constants.expoConfig?.extra?.apiUrl,
        prepareHeaders: (headers: Headers, { getState }) => {
            // @ts-ignore
            headers.set(AUTHORIZATION_HEADER_KEY, AUTHORIZATION_HEADER_PREFIX + getState().middleware.clientCredentialsBearerToken);

            return headers;
        }
    }),
    endpoints: () => ({

    })
})