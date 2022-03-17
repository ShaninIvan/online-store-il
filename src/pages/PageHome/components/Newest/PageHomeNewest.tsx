import CardSlider from 'components/panels/CardSlider'
import { Paths } from 'config/routes'
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
            <Link to={getPath(Paths.home)}>See All New Products</Link>
            <div className={styles.cards}>
                <CardSlider products={products} withControls />
            </div>
        </div>
    )
}
