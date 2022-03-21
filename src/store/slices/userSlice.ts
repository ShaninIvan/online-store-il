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

export const userRegister = createAsyncThunk(
    'userSlice/register',
    async (data: FormData, { rejectWithValue }) => {
        try {
            const response = (
                await axios.post(`${SERVER_URL}/api/auth/local/register`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
            ).data

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

// export const {
//     /* actions */
// } = userSlice.actions
export const userReducer = userSlice.reducer
