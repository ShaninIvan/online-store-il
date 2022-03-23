import getCategoryChildIds from 'services/Categories/getCategoryChildIds'
import getProductsByCategoryIds from 'services/Products/getProductsByCategoryIds'
import { CategoryType } from 'types/CategoryType'
import { ProductType } from 'types/ProductType'

type CatalogCategoriesMapType = Map<CategoryType, ProductType[]>

const getCatalogCategoriesMap = (
    maincategory: CategoryType,
    categories: CategoryType[],
    products: ProductType[]
) => {
    const categoriesMap: CatalogCategoriesMapType = new Map()

    if (maincategory.id === -1) {
        const productList = products.filter((product) => product.category === null)
        categoriesMap.set(maincategory, productList)

        return categoriesMap
    }

    const subIds = maincategory.subcategories.map((sub) => sub.id)
    const subcategories = categories.filter((category) => subIds.includes(category.id))

    const mainProductList: ProductType[] = []

    subcategories.forEach((category) => {
        const idList = getCategoryChildIds(category.id, categories)
        const productList = getProductsByCategoryIds(idList, products)
        categoriesMap.set(category, productList)
        mainProductList.push(...productList)
    })

    mainProductList.push(...getProductsByCategoryIds([maincategory.id], products))
    categoriesMap.set(maincategory, mainProductList)

    return categoriesMap
}

export default getCatalogCategoriesMap
