import { CatalogParamsSortType } from 'types/CatalogType'
import { ProductType } from 'types/ProductType'

const getCatalogSortedProducts = (products: ProductType[], sort: CatalogParamsSortType) => {
    switch (sort) {
        case 'position':
            return products.sort((a, b) => a.id - b.id)
        case 'name':
            return products.sort((a, b) => a.name.localeCompare(b.name))
        case 'price':
            return products.sort((a, b) => a.price - b.price)
        default:
            break
    }
}

export default getCatalogSortedProducts
