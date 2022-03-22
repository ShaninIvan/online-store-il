import { ProductType } from 'types/ProductType'

const getProductsWithoutCategory = (products: ProductType[]) => {
    return products.filter((product) => product.category === null)
}

export default getProductsWithoutCategory
