import Numberbox from 'components/inputs/Numberbox'
import Icon from 'components/parts/Icon'
import getMoney from 'core/utils/getMoney'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import cartUpdateOrderCount from 'services/Cart/cartUpdateOrderCount'
import getCartUpdateParams from 'services/Cart/getCartUpdateParams'
import { cartRequest } from 'store/slices/cartSlice'
import styles from './Table.module.less'

export const PageCartTable: React.FC = () => {
    const { orders } = useAppSelector((state) => state.cart)
    const { jwt, user } = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch()

    const deleteClickHandler = (id: number) => {}

    const editClickHandler = () => {}

    const getNumberboxChangeHandler = (id: number) => {
        return (count: number) => {
            if (!jwt) return
            const updatetOrders = cartUpdateOrderCount(orders, id, count)

            const params = getCartUpdateParams(jwt, user.cart, updatetOrders)

            dispatch(cartRequest(params))
        }
    }

    return (
        <div className={styles.table}>
            <div className={styles.row}>
                <div className={`${styles.title} ${styles.item}`}>Item</div>
                <div className={`${styles.title} ${styles.price}`}>Price</div>
                <div className={`${styles.title} ${styles.qty}`}>Qty</div>
                <div className={`${styles.title} ${styles.subtotal}`}>Subtotal</div>
            </div>

            {orders.map((order) => (
                <div key={order.product.id} className={styles.row}>
                    <div className={styles.item}>
                        <div className={styles.item__image}>
                            <img
                                src={order.product.image[0].imageUrl}
                                alt={order.product.image[0].imageAlt}
                            />
                        </div>
                        <div className={styles.item__desc}>{order.product.name}</div>
                    </div>
                    <div className={styles.price}>{getMoney(order.product.price)}</div>
                    <div className={styles.qty}>
                        <Numberbox
                            min={1}
                            max={99}
                            value={order.count}
                            onChange={getNumberboxChangeHandler(order.product.id)}
                        />
                    </div>
                    <div className={styles.subtotal}>
                        {getMoney(order.product.price * order.count)}
                    </div>
                    <div className={styles.controls}>
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
    )
}
