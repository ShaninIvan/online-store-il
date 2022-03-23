import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios, { AxiosRequestConfig } from 'axios'
import normalizeAPI from 'core/utils/normalizeAPI'
import { CartOrderType, CartStateType } from 'types/UserType'

const initialState: CartStateType = {
    orders: [],
    isLoading: false,
    error: null,
}

export const cartRequest = createAsyncThunk(
    'cartSlice/load',
    async (params: AxiosRequestConfig, { rejectWithValue, getState }) => {
        const { isLoading } = getState() as CartStateType
        if (isLoading) return
        try {
            const response = await axios(params)

            const normalize = normalizeAPI(response.data)

            return normalize.data
        } catch (error: any) {
            return rejectWithValue(error.response.data.error.message ?? '')
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(cartRequest.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(cartRequest.fulfilled, (state, action: PayloadAction<CartOrderType[]>) => {
                state.orders = action.payload
                state.isLoading = false
            })
            .addCase(cartRequest.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = `${action.payload.status} / ${action.payload.statusText} in URL: ${action.payload.config.url}`
            })
    },
})

// export const {
//     /* actions */
// } = cartSlice.actions
export const cartReducer = cartSlice.reducer
