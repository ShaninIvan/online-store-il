import { CatalogPricesMapType, CatalogPriceType } from 'types/CatalogType'
import { ProductType } from 'types/ProductType'

const getCatalogPricesMap = (products: ProductType[], prices: CatalogPriceType[]) => {
    const pricesMap: CatalogPricesMapType = new Map()

    prices.forEach((price) => {
        pricesMap.set(price, [])
    })

    products.forEach((product) => {
        for (let price of prices) {
            if (price.test(product.price)) {
                const arr = pricesMap.get(price)
                arr?.push(product)
                arr && pricesMap.set(price, arr)
                break
            }
        }
    })

    return pricesMap
}

export default getCatalogPricesMap
