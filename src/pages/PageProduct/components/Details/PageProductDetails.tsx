import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { ProductType } from 'types/ProductType'
import styles from './Details.module.less'

export const PageProductDetails: React.FC = () => {
    const product: ProductType = useOutletContext()

    return (
        <ul className={styles.details}>
            {product.details.map((item) => (
                <li key={item.id}>{item.detail}</li>
            ))}
        </ul>
    )
}
