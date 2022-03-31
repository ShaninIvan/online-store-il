import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/store'
import { CategoryType } from 'types/CategoryType'
import { ProductType } from 'types/ProductType'

const selectCategories = (state: RootState) => state.categories.categories
const selectProduct = (_: any, product: ProductType) => product

const ourDealsCategory: CategoryType = {
    id: -1,
    name: 'Our deals',
    parent: null,
    subcategories: [],
    image: [],
}

export const selectorProductCategory = createSelector(
    [selectCategories, selectProduct],
    (categories, product) => {
        const category =
            categories.find(
                (category) => product.category && category.id === product.category.id
            ) ?? ourDealsCategory

        return category
    }
)
