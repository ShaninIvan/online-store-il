import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { SERVER_URL } from 'config/API'
import { UserStateType } from 'types/UserType'

const initialState: UserStateType = {
    jwt: null,
    user: {
        username: '',
        email: '',
    },
    isLoading: false,
    error: null,
}

type UserResponseType = Pick<UserStateType, 'jwt' | 'user'>

export const userRegister = createAsyncThunk(
    'userSlice/register',
    async (data: FormData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${SERVER_URL}/api/auth/local/register`, data)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data.error.message ?? '')
        }
    }
)

export const userAuth = createAsyncThunk(
    'userSlice/auth',
    async (data: FormData, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${SERVER_URL}/api/auth/local`, data)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data.error.message ?? '')
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userRegister.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(userRegister.fulfilled, (state, action: PayloadAction<UserResponseType>) => {
                state.jwt = action.payload.jwt
                state.user = action.payload.user
                state.isLoading = false
            })
            .addCase(userRegister.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
            })
            .addCase(userAuth.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(userAuth.fulfilled, (state, action: PayloadAction<UserResponseType>) => {
                state.jwt = action.payload.jwt
                state.user = action.payload.user
                state.isLoading = false
            })
            .addCase(userAuth.rejected, (state, action: PayloadAction<any>) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

// export const {
//     /* actions */
// } = userSlice.actions
export const userReducer = userSlice.reducer
