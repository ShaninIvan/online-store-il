import Button from 'components/buttons/Button'
import React from 'react'
import { ProductType } from 'types/ProductType'
import styles from './Order.module.less'

type PropsType = {
    product: ProductType
}

export const PageProductOrder: React.FC<PropsType> = ({ product }) => {
    return (
        <div className={styles.order}>
            <Button preset='blue-white'>Add to Cart</Button>
            <Button preset='orange-black' paypal></Button>
        </div>
    )
}
