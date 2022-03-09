import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from 'config/API'
import { getAPI } from 'core/utils/getAPI'
import normalizeAPI from 'core/utils/normalizeAPI'
import { BrandStateType, BrandType } from 'types/BrandType'

const initialState: BrandStateType = {
    brands: [],
    isLoading: false,
    error: null,
}

export const fetchBrands = createAsyncThunk('brandSlice/fetch', async (_, { rejectWithValue }) => {
    try {
        const data = (await axios.get(getAPI(API.Brands))).data
        return normalizeAPI(data)
    } catch (error: any) {
        return rejectWithValue(error.response)
    }
})

const brandSlice = createSlice({
    name: 'brand',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchBrands.fulfilled, (state, action: PayloadAction<BrandType[]>) => {
                state.brands = action.payload
                state.isLoading = false
            })
            .addCase(fetchBrands.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = `${action.payload.status} / ${action.payload.statusText} in URL: ${action.payload.config.url}`
            })
    },
})

export const brandReducer = brandSlice.reducer
