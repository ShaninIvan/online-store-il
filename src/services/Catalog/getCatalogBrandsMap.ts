import { BrandType } from 'types/BrandType'
import { ProductType } from 'types/ProductType'

type CatalogBrandsMapType = Map<BrandType, ProductType[]>

const getCatalogBrandsMap = (products: ProductType[], brands: BrandType[]) => {
    const brandsMap: CatalogBrandsMapType = new Map()

    brands.forEach((brand) => {
        brandsMap.set(brand, [])
    })

    products.forEach((product) => {
        const brand = brands.find((brand) => brand.id === product.brand?.id)
        if (brand) {
            const arr = brandsMap.get(brand)
            arr?.push(product)
            arr && brandsMap.set(brand, arr)
        }
    })

    return brandsMap
}

export default getCatalogBrandsMap
