import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { promotedReducer } from './slices/promotedSlice'

export const store = configureStore({
    reducer: {
        promo: promotedReducer,
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
