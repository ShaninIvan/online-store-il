import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartStateType } from 'types/CartType'

const initialState: CartStateType = {
    orders: [],
    isLoading: false,
    error: null,
}

const cartSlice = createSlice({
    name: 'cart',
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
} = cartSlice.actions
export const cartReducer = cartSlice.reducer
