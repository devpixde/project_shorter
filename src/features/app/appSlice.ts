import {createSlice, Slice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

export interface AppState {
    isEditMode: boolean;
}

const initialState: AppState = {
    isEditMode: false,
}

export const appSlice: Slice<AppState> = createSlice(
    {
        name: 'app',
        initialState,
        reducers: {
            toggleEditMode: (state) => {
                state.isEditMode = !state.isEditMode;
            },
            edit: (state) => {
                state.isEditMode = true;
            },
            lock: (state) => {
                state.isEditMode = false;
            }
        }
    }
);



// selector
export const isEditMode = (state:RootState) => {
    return state.app.isEditMode;
}


export const {toggleEditMode, edit, lock} = appSlice.actions;

export default appSlice.reducer;