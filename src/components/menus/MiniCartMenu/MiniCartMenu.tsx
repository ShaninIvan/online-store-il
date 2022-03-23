import Button from 'components/buttons/Button'
import Icon from 'components/parts/Icon'
import getPath from 'core/routing/getPath'
import useAppSelector from 'hooks/useAppSelector'
import useCartFunctions from 'hooks/useCartFunctions'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './MiniCartMenu.module.less'

export const MiniCartMenu: React.FC = () => {
    const { orders } = useAppSelector((state) => state.cart)

    const { removeFromCart } = useCartFunctions()
    const navigate = useNavigate()

    if (orders.length === 0)
        return (
            <div className={`${styles.minicartmenu} ${styles.empty}`}>
                <h3>My Cart</h3>
                <div>Your cart is empty</div>
            </div>
        )

    const firstTwoOrders = orders.slice(0, 2)

    const subtotal = orders.reduce((acc, current) => acc + current.product.price * current.count, 0)

    const deleteClickHandler = (id: number) => {
        removeFromCart(id)
    }

    const editClickHandler = () => {
        navigate(getPath('/cart'))
    }

    return (
        <div className={styles.minicartmenu}>
            <h3>My Cart</h3>
            <div className={styles.count}>{orders.length} item in cart</div>
            <Button preset='tranparent-blue'>View or Edit Your Cart</Button>
            <div className={styles.products}>
                {firstTwoOrders.map((order, index) => (
                    <div key={index} className={styles.product}>
                        <div className={styles.product__count}>{order.count}x</div>
                        <div className={styles.product__img}>
                            <img
                                src={order.product.image[0].imageUrl}
                                alt={order.product.image[0].imageAlt}
                            />
                        </div>
                        <div className={styles.product__name}>{order.product.name}</div>
                        <div className={styles.product__controls}>
                            <div
                                className={styles.control}
                                onClick={() => deleteClickHandler(order.product.id)}
                            >
                                <Icon name='close' />
                            </div>
                            <div className={styles.control} onClick={() => editClickHandler()}>
                                <Icon name='edit' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.subtotal}>
                Subtotal: <span className={styles.subtotal__sum}>${subtotal}</span>
            </div>
            <Button preset='blue-white'>Go to Checkout</Button>
            <Button preset='orange-black' paypal>
                Check out with
            </Button>
        </div>
    )
}
