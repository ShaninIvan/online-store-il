import Button from 'components/buttons/Button'
import Numberbox from 'components/inputs/Numberbox'
import useCartFunctions from 'hooks/useCartFunctions'
import React, { useState } from 'react'
import { ProductType } from 'types/ProductType'
import styles from './Order.module.less'

type PropsType = {
    product: ProductType
}

export const PageProductOrder: React.FC<PropsType> = ({ product }) => {
    const [count, setCount] = useState<number>(1)

    const { addToCart } = useCartFunctions()

    const addToCartClickHandler = () => {
        addToCart(product, count)
    }

    return (
        <div className={styles.order}>
            <div className={styles.subtotal}>
                On Sale from <b>${product.price * count}</b>
            </div>
            <Numberbox min={1} max={99} value={count} onChange={setCount} />
            <Button preset='blue-white' onClick={() => addToCartClickHandler()}>
                Add to Cart
            </Button>
            <Button preset='orange-black' paypal></Button>
        </div>
    )
}
