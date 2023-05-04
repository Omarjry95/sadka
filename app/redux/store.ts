import { configureStore } from '@reduxjs/toolkit'
import reducer from "@app/redux/reducers";

export const store = configureStore({
    reducer
});