import Icon from 'components/parts/Icon'
import { CatalogFilterContext } from 'pages/PageCatalog/PageCatalog'
import React, { useContext, useState } from 'react'
import { CatalogPricesMapType } from 'types/CatalogType'
import styles from './PriceFilter.module.less'

type PropsType = {
    pricesMap: CatalogPricesMapType
}

export const PageCatalogPriceFilter: React.FC<PropsType> = ({ pricesMap }) => {
    const [opened, setOpened] = useState<boolean>(true)

    const { filters, setFilters } = useContext(CatalogFilterContext)

    const prices = Array.from(pricesMap.keys())

    const itemClickHandler = (pricecode: string) => {
        const arr = filters.price

        const index = arr.findIndex((code) => code === pricecode)

        if (index >= 0) {
            arr.splice(index, 1)
        } else {
            arr.push(pricecode)
        }

        setFilters({ ...filters, price: arr })
    }

    return (
        <div className={styles.pricefilter}>
            <div className={styles.title} onClick={() => setOpened(!opened)}>
                <h5>Category</h5>
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
                                filters.price.includes(price.code) && styles.selected
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
