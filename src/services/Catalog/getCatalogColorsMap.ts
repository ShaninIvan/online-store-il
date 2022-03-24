import { ProductType } from 'types/ProductType'

type CatalogColorsMapType = Map<ProductType['color'], ProductType[]>

const colors: ProductType['color'][] = ['black', 'blue', 'gold', 'gray', 'red', 'silver', 'white']

const getCatalogColorsMap = (products: ProductType[]) => {
    const colorsMap: CatalogColorsMapType = new Map()

    colors.forEach((color) => {
        colorsMap.set(color, [])
    })

    products.forEach((product) => {
        const color = product.color

        const arr = colorsMap.get(color)
        arr?.push(product)
        arr && colorsMap.set(color, arr)
    })

    return colorsMap
}

export default getCatalogColorsMap
