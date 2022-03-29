import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { brandReducer } from './slices/brandSlice'
import { cartReducer } from './slices/cartSlice'
import { catalogReducer } from './slices/catalogSlice'
import { categoryReducer } from './slices/categorySlice'
import { navigationReducer } from './slices/navigationSlice'
import { productReducer } from './slices/productSlice'
import { settingsReducer } from './slices/settingsSlice'
import { userReducer } from './slices/userSlice'

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        categories: categoryReducer,
        navigation: navigationReducer,
        brands: brandReducer,
        products: productReducer,
        user: userReducer,
        cart: cartReducer,
        catalog: catalogReducer,
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
