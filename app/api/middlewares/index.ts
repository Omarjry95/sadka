import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Constants from "expo-constants";

export default createApi({
    reducerPath: 'middlewareApi',
    baseQuery: fetchBaseQuery({
        baseUrl: Constants.expoConfig?.extra?.oauth2TokenUrl
    }),
    endpoints: () => ({

    })
})