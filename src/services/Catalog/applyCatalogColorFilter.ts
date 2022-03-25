import { CatalogColorsMapType } from 'types/CatalogType'
import { ProductType } from 'types/ProductType'

const applyCatalogColorFilter = (colorsMap: CatalogColorsMapType, colorList: string[]) => {
    const result = new Set<ProductType>()

    colorsMap.forEach((productList, color) => {
        if (colorList.includes(color)) productList.forEach(result.add, result)
    })

    return Array.from(result)
}

export default applyCatalogColorFilter
