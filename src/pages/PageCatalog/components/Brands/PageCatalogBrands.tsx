import Button from 'components/buttons/Button'
import React from 'react'
import { CatalogBrandsMapType } from 'types/CatalogType'
import styles from './Brands.module.less'

type PropsType = {
    brandsMap: CatalogBrandsMapType
}

export const PageCatalogBrands: React.FC<PropsType> = ({ brandsMap }) => {
    const brands = Array.from(brandsMap.keys())

    const patrialBrands = brands.slice(0, 6)

    return (
        <div className={styles.brands}>
            <h4>Btands</h4>
            <Button preset='transparent-gray'>All Brands</Button>
            <div className={styles.items}>
                {patrialBrands.map((brand) => (
                    <div key={brand.id} className={styles.item}>
                        <img src={brand.image.imageUrl} alt={brand.image.imageAlt} />
                    </div>
                ))}
            </div>
        </div>
    )
}
