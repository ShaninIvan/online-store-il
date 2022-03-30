import { CatalogBrandsMapType } from 'types/CatalogType'
import { ProductType } from 'types/ProductType'

const applyCatalogBrandFilter = (brandsMap: CatalogBrandsMapType, idList: number[]) => {
    const result = new Set<ProductType>()

    brandsMap.forEach((productList, brand) => {
        if (idList.includes(brand.id)) productList.forEach(result.add, result)
    })

    return Array.from(result)
}

export default applyCatalogBrandFilter
