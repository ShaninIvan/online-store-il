import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { brandReducer } from './slices/brandSlice'
import { categoryReducer } from './slices/categorySlice'
import { navigationReducer } from './slices/navigationSlice'
import { productReducer } from './slices/productSlice'
import { settingsReducer } from './slices/settingsSlice'

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        categories: categoryReducer,
        navigation: navigationReducer,
        brands: brandReducer,
        products: productReducer,
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
