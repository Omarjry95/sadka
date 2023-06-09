import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import Constants from "expo-constants";

export default createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: Constants.expoConfig?.extra?.apiUrl
    }),
    endpoints: () => ({

    })
})