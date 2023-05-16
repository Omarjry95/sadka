import { configureStore } from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "@app/api";
import reducers from "@app/redux/reducers";
import {Persistor} from "redux-persist/es/types";

const persistReducerConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const store = configureStore({
    reducer: persistReducer(persistReducerConfig, reducers),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(api.middleware)
});

export const persistor: Persistor = persistStore(store);

export default store;