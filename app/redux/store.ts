import { configureStore } from '@reduxjs/toolkit';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "@app/api";
import reducers from "@app/redux/reducers";
import {Persistor} from "redux-persist/es/types";

const persistReducerConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [
        api.reducerPath,
        'global'
    ]
}

const store = configureStore({
    reducer: persistReducer(persistReducerConfig, reducers),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(api.middleware)
});

export const persistor: Persistor = persistStore(store);

export default store;