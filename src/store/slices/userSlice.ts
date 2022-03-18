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

type RegisterDataType = {
    username: string
    email: string
    password: string
}

export const userRegister = createAsyncThunk(
    'userSlice/register',
    async (data: RegisterDataType, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${SERVER_URL}/auth/local/register`, {
                username: data.username,
                email: data.email,
                password: data.password,
            })

            console.log(response)
        } catch (error: any) {
            return rejectWithValue(error.response)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
})

export const {
    /* actions */
} = userSlice.actions
export const userReducer = userSlice.reducer
