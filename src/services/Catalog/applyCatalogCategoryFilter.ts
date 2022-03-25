import { CatalogCategoriesMapType } from 'types/CatalogType'
import { ProductType } from 'types/ProductType'

const applyCatalogCategoryFilter = (categoriesMap: CatalogCategoriesMapType, idList: number[]) => {
    const result = new Set<ProductType>()

    categoriesMap.forEach((productList, category) => {
        if (idList.includes(category.id)) productList.forEach(result.add, result)
    })

    return Array.from(result)
}

export default applyCatalogCategoryFilter
