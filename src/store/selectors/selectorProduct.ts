import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

const selectProducts = (state: RootState) => state.products.products
const selectId = (_: any, id: number) => id

export const selectorProduct = createSelector([selectProducts, selectId], (products, id) => {
    const product = products.find((product) => product.id === id)
    return product
})
