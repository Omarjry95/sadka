import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Constants from "expo-constants";

export default createApi({
    reducerPath: 'clientApi',
    baseQuery: fetchBaseQuery({
        baseUrl: Constants.expoConfig?.extra?.apiUrl,
        prepareHeaders: (headers: Headers, { getState }) => {
            // @ts-ignore
            headers.set("Authorization", "Bearer " + getState().middleware.clientCredentialsBearerToken);

            return headers;
        }
    }),
    endpoints: () => ({

    })
})