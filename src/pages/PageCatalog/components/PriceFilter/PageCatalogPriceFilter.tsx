import Icon from 'components/parts/Icon'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React, { useState } from 'react'
import { setCatalogPotentialParams } from 'store/slices/catalogSlice'
import { CatalogPricesMapType } from 'types/CatalogType'
import styles from './PriceFilter.module.less'

type PropsType = {
    pricesMap: CatalogPricesMapType
}

export const PageCatalogPriceFilter: React.FC<PropsType> = ({ pricesMap }) => {
    const [opened, setOpened] = useState<boolean>(true)

    const dispatch = useAppDispatch()
    const filter = useAppSelector((state) => state.catalog.potential.price)

    const prices = Array.from(pricesMap.keys())

    const itemClickHandler = (pricecode: string) => {
        const arr = [...filter]

        const index = arr.findIndex((code) => code === pricecode)

        if (index >= 0) {
            arr.splice(index, 1)
        } else {
            arr.push(pricecode)
        }

        dispatch(setCatalogPotentialParams({ price: arr }))
    }

    return (
        <div className={styles.pricefilter}>
            <div className={styles.title} onClick={() => setOpened(!opened)}>
                <h5>Price</h5>
                <div className={`${styles.arrow} ${opened && styles.opened}`}>
                    <Icon name='arrowdown' />
                </div>
            </div>
            <div className={`${styles.list} ${opened && styles.opened}`}>
                {prices.map((price) => {
                    const count = pricesMap.get(price)?.length

                    if (!count || count === 0) return null

                    return (
                        <div
                            key={price.code}
                            className={`${styles.item} ${
                                filter.includes(price.code) && styles.selected
                            }`}
                            onClick={() => itemClickHandler(price.code)}
                        >
                            <div className={styles.item__name}>{price.title}</div>
                            <div className={styles.item__count}>{count}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
