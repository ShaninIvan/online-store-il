import Button from 'components/buttons/Button'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React, { useState } from 'react'
import { setCatalogPotentialParams } from 'store/slices/catalogSlice'
import { CatalogBrandsMapType } from 'types/CatalogType'
import styles from './Brands.module.less'

type PropsType = {
    brandsMap: CatalogBrandsMapType
}

export const PageCatalogBrands: React.FC<PropsType> = ({ brandsMap }) => {
    const [allVisible, setAllVisible] = useState<boolean>(false)

    const dispatch = useAppDispatch()

    const brands = Array.from(brandsMap.keys())

    const filter = useAppSelector((state) => state.catalog.potential.brand)

    const visibleBrands = allVisible ? brands : brands.slice(0, 6)

    const itemClickHandler = (brandId: number) => {
        const arr = [...filter]

        const index = arr.findIndex((id) => id === brandId)

        if (index >= 0) {
            arr.splice(index, 1)
        } else {
            arr.push(brandId)
        }

        dispatch(setCatalogPotentialParams({ brand: arr }))
    }

    return (
        <div className={styles.brands}>
            <h4>Btands</h4>
            <Button preset='transparent-gray' onClick={() => setAllVisible(!allVisible)}>
                {allVisible ? 'Hide Brands' : 'All Brands'}
            </Button>
            <div className={styles.items}>
                {visibleBrands.map((brand) => (
                    <div
                        key={brand.id}
                        className={`${styles.item} ${filter.includes(brand.id) && styles.selected}`}
                        onClick={() => itemClickHandler(brand.id)}
                    >
                        <img src={brand.image.imageUrl} alt={brand.image.imageAlt} />
                    </div>
                ))}
            </div>
        </div>
    )
}
