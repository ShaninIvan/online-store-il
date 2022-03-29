import { createSelector } from '@reduxjs/toolkit'
import { pageCatalogPrices } from 'pages/PageCatalog/PageCatalogMocks'
import getCatalogBrandsMap from 'services/Catalog/getCatalogBrandsMap'
import getCatalogCategoriesMap from 'services/Catalog/getCatalogCategoriesMap'
import getCatalogColorsMap from 'services/Catalog/getCatalogColorsMap'
import getCatalogPricesMap from 'services/Catalog/getCatalogPricesMap'
import { RootState } from 'store/store'
import { CategoryType } from 'types/CategoryType'

const ourDealsCategory: CategoryType = {
    id: -1,
    name: 'Our deals',
    parent: null,
    subcategories: [],
    image: [],
}

const selectCategories = (state: RootState) => state.categories.categories
const selectProducts = (state: RootState) => state.products.products
const selectBrands = (state: RootState) => state.brands.brands
const selectId = (_: any, id: number | string) => id

export const selectorCatalogMaps = createSelector(
    [selectCategories, selectProducts, selectBrands, selectId],

    (categories, products, brands, id: number | string) => {
        const currentCategory =
            categories.find((category) => category.id === Number(id)) ?? ourDealsCategory
        const categoriesMap = getCatalogCategoriesMap(currentCategory, categories, products)
        const fullProductList = categoriesMap.get(currentCategory) ?? []
        const pricesMap = getCatalogPricesMap(fullProductList, pageCatalogPrices)
        const colorsMap = getCatalogColorsMap(fullProductList)
        const brandsMap = getCatalogBrandsMap(fullProductList, brands)

        const selector = {
            currentCategory,
            fullProductList,
            categoriesMap,
            pricesMap,
            colorsMap,
            brandsMap,
        }

        return selector
    }
)
