import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { ProductType } from 'types/ProductType'
import styles from './About.module.less'

export const PageProductAbout: React.FC = () => {
    const product: ProductType = useOutletContext()

    return <div className={styles.about}>{product.description}</div>
}
