import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from 'config/API'
import { getAPI } from 'core/utils/getAPI'
import normalizeAPI from 'core/utils/normalizeAPI'
import { ProductStateType, ProductType } from 'types/ProductType'

const initialState: ProductStateType = {
    products: [],
    isLoading: false,
    error: null,
}

export const fetchProducts = createAsyncThunk(
    'productSlice/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const data = (await axios.get(getAPI(API.Products))).data
            return normalizeAPI(data)
        } catch (error: any) {
            return rejectWithValue(error.response)
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
                state.products = action.payload
                state.isLoading = false
            })
            .addCase(fetchProducts.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = `${action.payload.status} / ${action.payload.statusText} in URL: ${action.payload.config.url}`
            })
    },
})

export const productReducer = productSlice.reducer
