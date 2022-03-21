import CardSlider from 'components/panels/CardSlider'
import getPath from 'core/routing/getPath'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CategoryType } from 'types/CategoryType'
import { ProductType } from 'types/ProductType'
import styles from './Promoblock.module.less'

type ExtendedCategoryType = Omit<CategoryType, 'id'> & { id: string | number }

type PropsType = {
    category: ExtendedCategoryType
    productsMap: Map<
        ExtendedCategoryType,
        | ProductType[]
        | {
              [key: string]: ProductType[]
          }
    >
}

export const PageHomePromoblock: React.FC<PropsType> = ({ category, productsMap }) => {
    const [activeSub, setActiveSub] = useState<string | null>(null)

    const mapValue = productsMap.get(category)

    if (!mapValue) return null

    let products: ProductType[] = []
    let subs: string[] = []

    if (Array.isArray(mapValue)) {
        products = mapValue
    } else {
        subs = Object.keys(mapValue as Object)
        if (activeSub === null) {
            setActiveSub(subs[0])
        } else {
            products = mapValue[activeSub]
        }
    }

    const visibleProducts = products.slice(0, 5)

    const subClickHandler = (sub: string) => {
        if (sub !== activeSub) setActiveSub(sub)
    }

    return (
        <div className={styles.promoblock}>
            <div className={styles.top}>
                {subs.map((sub, index) => (
                    <div
                        key={index}
                        className={`${styles.sub} ${sub === activeSub && styles.active}`}
                        onClick={() => subClickHandler(sub)}
                    >
                        {sub}
                    </div>
                ))}
            </div>
            <div className={styles.bottom}>
                <div className={styles.category}>
                    <img src={category.image[0].imageUrl} alt={category.image[0].imageAlt} />
                    <div className={styles.name}>{category.name}</div>
                    <Link to={getPath('/catalog/:id', { id: category.id })}>See All Products</Link>
                </div>
                <div className={styles.cards}>
                    <CardSlider products={visibleProducts} />
                </div>
            </div>
        </div>
    )
}
