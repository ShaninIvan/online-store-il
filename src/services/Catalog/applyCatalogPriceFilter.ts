import { CatalogPricesMapType } from 'types/CatalogType'
import { ProductType } from 'types/ProductType'

const applyCatalogPriceFilter = (priceMap: CatalogPricesMapType, codeList: string[]) => {
    const result = new Set<ProductType>()

    priceMap.forEach((productList, price) => {
        if (codeList.includes(price.code)) productList.forEach(result.add, result)
    })

    return Array.from(result)
}

export default applyCatalogPriceFilter
