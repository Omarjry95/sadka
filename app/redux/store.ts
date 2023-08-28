import { configureStore } from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userProtectedApi, clientProtectedApi, middlewareApi } from "@app/api";
import reducers from "@app/redux/reducers";
import {Persistor} from "redux-persist/es/types";

const persistReducerConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [
        userProtectedApi.reducerPath,
        clientProtectedApi.reducerPath,
        middlewareApi.reducerPath,
        'middleware',
        'global',
        'auth',
        'user'
    ]
}

const store = configureStore({
    reducer: persistReducer(persistReducerConfig, reducers),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
        .concat(userProtectedApi.middleware)
        .concat(clientProtectedApi.middleware)
        .concat(middlewareApi.middleware)
});

export const persistor: Persistor = persistStore(store);

export default store;