import { ProductType } from 'types/ProductType'

const getProductsByCategoryIds = (ids: (number | null)[], products: ProductType[]) => {
    return products.filter((product) => product.category && ids.includes(product.category.id))
}

export default getProductsByCategoryIds
