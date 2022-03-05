import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from 'config/API'
import { getAPI } from 'core/utils/getAPI'
import { CategoryResponseType, CategoryStateType } from 'types/CategoryType'

const initialState: CategoryStateType = {
    categories: [],
    isLoading: false,
    error: null,
}

export const fetchCategories = createAsyncThunk(
    'categorySlice/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const data = (await axios.get(getAPI(API.Categories))).data

            return data
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
                (state, action: PayloadAction<CategoryResponseType>) => {
                    state.categories = action.payload.data
                    state.isLoading = false
                }
            )
            .addCase(fetchCategories.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = `${action.payload.status} / ${action.payload.statusText} in URL: ${action.payload.config.url}`
            })
    },
})

export const {
    /* actions */
} = categorySlice.actions
export const categoryReducer = categorySlice.reducer
