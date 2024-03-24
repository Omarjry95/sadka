import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GlobalBehavior} from "@app/global/models";
import {RootState} from "@app/redux/models";
import {BaseProps as ModalBaseProps} from "@app/reusable/dialog/models";

const initialState: GlobalBehavior = {
    isLoading: false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
        showModal: (state, action: PayloadAction<ModalBaseProps>) => {
            state.modalProps = action.payload;
        },
        hideModal: (state) => {
            state.modalProps = undefined
        }
    }
});

const { actions, reducer } = globalSlice;

export const { showLoading, hideLoading,
    showModal, hideModal } = actions;

export const globalSelector = (state: RootState) => state.global;

export default reducer;