import CardSlider from 'components/panels/CardSlider'
import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import React from 'react'
import { Link } from 'react-router-dom'
import { CategoryType } from 'types/CategoryType'
import { ProductType } from 'types/ProductType'
import styles from './Promoblock.module.less'

type PropsType = {
    category: Omit<CategoryType, 'id'> & { id: string | number }
    products: ProductType[]
}

export const PageHomePromoblock: React.FC<PropsType> = ({ category, products }) => {
    const visibleProducts = products.slice(0, 5)

    return (
        <div className={styles.promoblock}>
            <div className={styles.category}>
                <img src={category.image[0].imageUrl} alt={category.image[0].imageAlt} />
                <div className={styles.name}>{category.name}</div>
                <Link to={getPath(Paths.catalog, { id: category.id })}>See All Products</Link>
            </div>
            <div className={styles.cards}>
                <CardSlider products={visibleProducts} />
            </div>
        </div>
    )
}
