import Numberbox from 'components/inputs/Numberbox'
import Icon from 'components/parts/Icon'
import ScreenChecker from 'components/utils/ScreenChecker'
import getMoney from 'core/utils/getMoney'
import useAppSelector from 'hooks/useAppSelector'
import useCartFunctions from 'hooks/useCartFunctions'
import React from 'react'
import styles from './Table.module.less'

export const PageCartTable: React.FC = () => {
    const { orders } = useAppSelector((state) => state.cart)

    const { changeOrderCount, removeFromCart } = useCartFunctions()

    const deleteClickHandler = (id: number) => {
        removeFromCart(id)
    }

    const editClickHandler = () => {}

    const getNumberboxChangeHandler = (id: number) => {
        return (count: number) => {
            changeOrderCount(id, count)
        }
    }

    return (
        <div className={styles.table}>
            <ScreenChecker desktop>
                <div className={styles.row}>
                    <div className={`${styles.title} ${styles.item}`}>Item</div>
                    <div className={`${styles.title} ${styles.price}`}>Price</div>
                    <div className={`${styles.title} ${styles.qty}`}>Qty</div>
                    <div className={`${styles.title} ${styles.subtotal}`}>Subtotal</div>
                </div>
            </ScreenChecker>

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
