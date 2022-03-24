import { BrandType } from './BrandType'
import { CategoryType } from './CategoryType'
import { ProductType } from './ProductType'

export type CatalogPriceType = {
    title: string
    code: string
    test: (price: number) => boolean
}

export type CatalogCategoriesMapType = Map<CategoryType, ProductType[]>
export type CatalogPricesMapType = Map<CatalogPriceType, ProductType[]>
export type CatalogColorsMapType = Map<ProductType['color'], ProductType[]>
export type CatalogBrandsMapType = Map<BrandType, ProductType[]>

export type CatalogParamsSortType = 'position' | 'name' | 'price'
export type CatalogParamsShowType = 5 | 15 | 25
export type CatalogParamsViewType = 'grid' | 'list'
export type CatalogParamsFiltersType = {
    category: number[]
    price: CatalogPriceType['code'][]
    color: ProductType['color'][]
    name: string
    brands: number[]
}
