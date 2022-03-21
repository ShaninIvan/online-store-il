import CardSlider from 'components/panels/CardSlider'
import getPath from 'core/routing/getPath'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from 'types/ProductType'
import styles from './Newest.module.less'

type PropsType = {
    products: ProductType[]
}

export const PageHomeNewest: React.FC<PropsType> = ({ products }) => {
    return (
        <div className={styles.newest}>
            <h2>New Products</h2>
            <Link to={getPath('/')}>See All New Products</Link>
            <div className={styles.cards}>
                <CardSlider products={products} withControls />
            </div>
        </div>
    )
}
