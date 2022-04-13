import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { SERVER_URL } from 'config/API'
import normalizeAPI from 'core/utils/normalizeAPI'
import { RootState } from 'store/store'
import { CartOrderType, CartStateType } from 'types/UserType'

const initialState: CartStateType = {
    orders: [],
    shipping: 21,
    gst: 10,
    tax: 1.91,
    isLoading: false,
    error: null,
}

export const cartRequestGet = createAsyncThunk<CartOrderType[], void, { state: RootState }>(
    'cartSlice/GET',
    async (_, { rejectWithValue, getState }) => {
        const state = getState()

        const jwt = state.user.jwt
        const cart = state.user.user.cart

        if (jwt === null) return []

        try {
            const response = await axios.get(`${SERVER_URL}/api/carts/${cart}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })

            const normalize = normalizeAPI(response.data)

            return normalize.data
        } catch (error: any) {
            return rejectWithValue(
                axios.isAxiosError(error)
                    ? error?.response?.data.error.message
                    : 'cart request error'
            )
        }
    }
)

export const cartRequestPut = createAsyncThunk<
    CartOrderType[],
    CartOrderType[],
    { state: RootState }
>(
    'cartSlice/PUT',
    async (data, { rejectWithValue, getState }) => {
        const state = getState()

        const jwt = state.user.jwt
        const cart = state.user.user.cart

        if (jwt === null) return []

        try {
            const json = JSON.stringify(data)

            const response = await axios.put(
                `${SERVER_URL}/api/carts/${cart}`,
                { data: { data: json } },
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            )

            const normalize = normalizeAPI(response.data)

            return normalize.data
        } catch (error: any) {
            return rejectWithValue(
                axios.isAxiosError(error)
                    ? error?.response?.data.error.message
                    : 'cart request error'
            )
        }
    },
    {
        condition: (_: any, { getState }) => {
            const isLoading = getState().cart.isLoading
            if (isLoading) return false
        },
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        setCartShipping: (state, action: PayloadAction<number>) => {
            state.shipping = action.payload
        },
        setCartGST: (state, action: PayloadAction<number>) => {
            state.gst = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(cartRequestGet.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(cartRequestGet.fulfilled, (state, action: PayloadAction<CartOrderType[]>) => {
                state.orders = action.payload
                state.isLoading = false
            })
            .addCase(cartRequestGet.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = `${action.payload.status} / ${action.payload.statusText} in URL: ${action.payload.config.url}`
            })
            .addCase(cartRequestPut.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(cartRequestPut.fulfilled, (state, action: PayloadAction<CartOrderType[]>) => {
                state.orders = action.payload
                state.isLoading = false
            })
            .addCase(cartRequestPut.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = `${action.payload.status} / ${action.payload.statusText} in URL: ${action.payload.config.url}`
            })
    },
})

export const { setCartShipping, setCartGST } = cartSlice.actions
export const cartReducer = cartSlice.reducer
