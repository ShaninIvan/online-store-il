import { createSelector } from '@reduxjs/toolkit'
import applyCatalogBrandFilter from 'services/Catalog/applyCatalogBrandFilter'
import applyCatalogCategoryFilter from 'services/Catalog/applyCatalogCategoryFilter'
import applyCatalogColorFilter from 'services/Catalog/applyCatalogColorFilter'
import applyCatalogPriceFilter from 'services/Catalog/applyCatalogPriceFilter'
import getCatalogSortedProducts from 'services/Catalog/getCatalogSortedProducts'
import { RootState } from 'store/store'
import {
    CatalogBrandsMapType,
    CatalogCategoriesMapType,
    CatalogColorsMapType,
    CatalogPricesMapType,
} from 'types/CatalogType'
import { ProductType } from 'types/ProductType'

const productListSelector = (_: any, __: any, products: ProductType[]) => products

const paramCategorySelector = (state: RootState) => state.catalog.actual.category
const mapCategorySelector = (_: any, categoryMap: CatalogCategoriesMapType) => categoryMap

export const selectorCatalogCategoryFilter = createSelector(
    [paramCategorySelector, mapCategorySelector, productListSelector],
    (categoryList, categoryMap, products) => {
        if (categoryList.length === 0) return products

        return applyCatalogCategoryFilter(categoryMap, categoryList)
    }
)

const paramPriceSelector = (state: RootState) => state.catalog.actual.price
const mapPriceSelector = (_: any, priceMap: CatalogPricesMapType) => priceMap

export const selectorCatalogPriceFilter = createSelector(
    [paramPriceSelector, mapPriceSelector, productListSelector],
    (priceList, priceMap, products) => {
        if (priceList.length === 0) return products

        return applyCatalogPriceFilter(priceMap, priceList)
    }
)

const paramColorSelector = (state: RootState) => state.catalog.actual.color
const mapColorSelector = (_: any, colorMap: CatalogColorsMapType) => colorMap

export const selectorCatalogColorFilter = createSelector(
    [paramColorSelector, mapColorSelector, productListSelector],
    (colorList, colorMap, products) => {
        if (colorList.length === 0) return products

        return applyCatalogColorFilter(colorMap, colorList)
    }
)

const paramBrandSelector = (state: RootState) => state.catalog.actual.brand
const mapBrandSelector = (_: any, brandMap: CatalogBrandsMapType) => brandMap

export const selectorCatalogBrandFilter = createSelector(
    [paramBrandSelector, mapBrandSelector, productListSelector],
    (brandList, brandMap, products) => {
        if (brandList.length === 0) return products

        return applyCatalogBrandFilter(brandMap, brandList)
    }
)

const paramSortSelector = (state: RootState) => state.catalog.actual.sort

export const selectorCatalogSort = createSelector(
    [paramSortSelector, productListSelector],
    (sort, products) => {
        return getCatalogSortedProducts(products, sort)
    }
)
