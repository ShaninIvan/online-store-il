import Icon from 'components/parts/Icon'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React, { useState } from 'react'
import { setCatalogPotentialParams } from 'store/slices/catalogSlice'
import { CatalogBrandsMapType } from 'types/CatalogType'
import styles from './BrandFilter.module.less'

type PropsType = {
    brandsMap: CatalogBrandsMapType
}

export const PageCatalogBrandFilter: React.FC<PropsType> = ({ brandsMap }) => {
    const [opened, setOpened] = useState<boolean>(true)

    const dispatch = useAppDispatch()

    const filter = useAppSelector((state) => state.catalog.potential.brand)

    const brands = Array.from(brandsMap.keys())

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
        <div className={styles.brandfilter}>
            <div className={styles.title} onClick={() => setOpened(!opened)}>
                <h5>Brands</h5>
                <div className={`${styles.arrow} ${opened && styles.opened}`}>
                    <Icon name='arrowdown' />
                </div>
            </div>
            <div className={`${styles.list} ${opened && styles.opened}`}>
                {brands.map((brand) => {
                    const count = brandsMap.get(brand)?.length

                    if (!count || count === 0) return null

                    return (
                        <div
                            key={brand.id}
                            className={`${styles.item} ${
                                filter.includes(brand.id) && styles.selected
                            }`}
                            onClick={() => itemClickHandler(brand.id)}
                        >
                            <div className={styles.item__name}>{brand.name}</div>
                            <div className={styles.item__count}>{count}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
