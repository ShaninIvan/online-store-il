import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {}

const promotedSlice = createSlice({
    name: 'promoted',
    initialState: initialState,
    reducers: {
        /*
        actionName: (state, action: PayloadAction<number>) => {
            state.isLoading = false
            state.counter += action.payload
        },
       */
    },
})

export const {
    /* actions */
} = promotedSlice.actions
export const promotedReducer = promotedSlice.reducer
