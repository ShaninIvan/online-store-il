import Specs from 'components/parts/Specs'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { ProductType } from 'types/ProductType'
import styles from './Specs.module.less'

export const PageProductSpecs: React.FC = () => {
    const product: ProductType = useOutletContext()

    return (
        <div className={styles.specs}>
            <Specs data={product.specs} />
        </div>
    )
}
