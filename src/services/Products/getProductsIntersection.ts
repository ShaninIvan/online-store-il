import { ProductType } from 'types/ProductType'

const getProductsIntersection = (...productsSets: ProductType[][]) => {
    const first = productsSets[0]

    if (productsSets.length === 1) return first

    let result = first

    for (let index = 1; index < productsSets.length; index++) {
        result = result.filter((product) => productsSets[index].includes(product))
    }

    return Array.from(new Set(result))
}

export default getProductsIntersection
