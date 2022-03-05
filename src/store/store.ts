import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { categoryReducer } from './slices/categorySlice'
import { settingsReducer } from './slices/settingsSlice'

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        categories: categoryReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
