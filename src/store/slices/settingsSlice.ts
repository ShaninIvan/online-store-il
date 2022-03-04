import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from 'config/API'
import { getAPI } from 'core/utils/getAPI'
import { SettingsResponseType, SettingsStateType } from 'types/SettingsType'

const initialState: SettingsStateType = {
    settings: {
        discount: 0,
        contacts: {
            address: '',
            email: '',
            facebook: '',
            instagram: '',
            phone: '',
        },
    },
    isLoading: false,
    error: null,
}

export const fetchSettings = createAsyncThunk(
    'settingsSlice/fetch',
    async (_, { rejectWithValue }) => {
        try {
            const data = (await axios.get(getAPI(API.Settings))).data
            return data
        } catch (error: any) {
            return rejectWithValue(error.response)
        }
    }
)

const settingsSlice = createSlice({
    name: 'settings',
    initialState: initialState,
    reducers: {
        /*
        actionName: (state, action: PayloadAction<number>) => {
            state.isLoading = false
            state.counter += action.payload
        },
       */
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSettings.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(
                fetchSettings.fulfilled,
                (state, action: PayloadAction<SettingsResponseType>) => {
                    state.settings = action.payload.data.attributes
                    state.isLoading = false
                }
            )
            .addCase(fetchSettings.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = `${action.payload.status} / ${action.payload.statusText} in URL: ${action.payload.config.url}`
            })
    },
})

export const {
    /* actions */
} = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer
