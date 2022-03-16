import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from 'config/API'
import { getAPI } from 'core/utils/getAPI'
import normalizeAPI from 'core/utils/normalizeAPI'
import { CategoryStateType, CategoryType, PromotedType } from 'types/CategoryType'

const initialState: CategoryStateType = {
    categories: [],
    promoted: [],
    isLoading: false,
    error: null,
}

export const fetchCategories = createAsyncThunk(
    'categorySlice/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const categories = (await axios.get(getAPI(API.Categories))).data
            const promo = (await axios.get(getAPI(API.Promo))).data
            return { categories: normalizeAPI(categories), promo: normalizeAPI(promo) }
        } catch (error: any) {
            return rejectWithValue(error.response)
        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(
                fetchCategories.fulfilled,
                (
                    state,
                    action: PayloadAction<{ categories: CategoryType[]; promo: PromotedType[] }>
                ) => {
                    state.categories = action.payload.categories
                    const promoIds = action.payload.promo.map((promo) => promo.category.id)
                    state.promoted = state.categories.filter((category) =>
                        promoIds.includes(category.id)
                    )
                    state.isLoading = false
                }
            )
            .addCase(fetchCategories.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = `${action.payload.status} / ${action.payload.statusText} in URL: ${action.payload.config.url}`
            })
    },
})

export const categoryReducer = categorySlice.reducer
