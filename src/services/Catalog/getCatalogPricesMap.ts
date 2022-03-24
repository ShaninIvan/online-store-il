import { ProductType } from 'types/ProductType'

type PriceType = {
    title: string
    code: string
    test: (price: number) => boolean
}

type CatalogPricesMapType = Map<PriceType, ProductType[]>

const getCatalogPricesMap = (products: ProductType[], prices: PriceType[]) => {
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
