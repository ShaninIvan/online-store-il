import Button from 'components/buttons/Button'
import Breadcrumbs from 'components/parts/Breadcrumbs'
import getPath from 'core/routing/getPath'
import getMoney from 'core/utils/getMoney'
import useAppSelector from 'hooks/useAppSelector'
import useJWTCheck from 'hooks/useJWTCheck'
import React from 'react'
import { selectorCartSubtotal, selectorCartTotal } from 'store/selectors/selectorCartSubtotal'
import { PageCartDiscount } from './components/Discount/PageCartDiscount'
import { PageCartEstimate } from './components/Estimate/PageCartEstimate'
import { PageCartTable } from './components/Table/PageCartTable'
import styles from './PageCart.module.less'

const crumbs = [
    { name: 'Home', path: getPath('/') },
    { name: 'Shopping Cart', path: getPath('/cart') },
]

export const PageCart: React.FC = () => {
    useJWTCheck()

    const { shipping, gst, tax } = useAppSelector((state) => state.cart)
    const subtotal = useAppSelector((state) => selectorCartSubtotal(state))
    const total = useAppSelector((state) => selectorCartTotal(state))

    const gstResult = subtotal * (gst / 100)

    return (
        <div className={styles.pagecart}>
            <Breadcrumbs crumbs={crumbs} />
            <h2>Shopping Cart</h2>

            <div className={styles.content}>
                <div className={styles.cart}>
                    <PageCartTable />
                    <div className={styles.buttons}>
                        <div>
                            <Button preset='transparent-gray'>Continue Shopping</Button>
                            <Button preset='black-white'>Clear Shopping Cart</Button>
                        </div>
                        <Button preset='black-white'>Update Shopping Cart</Button>
                    </div>
                </div>

                <div className={styles.summary}>
                    <h3>Summary</h3>
                    <PageCartEstimate />
                    <PageCartDiscount />
                    <hr />

                    <div className={styles.cost}>
                        <div className={styles.const__title}>Subtotal</div>
                        <div className={styles.const__value}>{getMoney(subtotal)}</div>
                    </div>

                    <div className={styles.cost}>
                        <div className={styles.const__title}>Shipping</div>
                        <div className={styles.const__value}>{getMoney(shipping)}</div>
                    </div>

                    {shipping !== 0 && (
                        <div className={styles.note}>
                            (Standard Rate - Price may vary depending on the item/destination. Shop
                            Staff will contact you.)
                        </div>
                    )}

                    <div className={styles.cost}>
                        <div className={styles.const__title}>Tax</div>
                        <div className={styles.const__value}>{getMoney(tax)}</div>
                    </div>

                    <div className={styles.cost}>
                        <div className={styles.const__title}>GST ({gst}%)</div>
                        <div className={styles.const__value}>{getMoney(gstResult)}</div>
                    </div>

                    <div className={styles.cost}>
                        <div className={styles.const__title}>Order Total</div>
                        <div className={styles.total}>{getMoney(total)}</div>
                    </div>

                    <Button preset='blue-white'>Proceed to Checkout</Button>
                    <Button preset='orange-black' paypal>
                        Check out with
                    </Button>
                    <Button preset='transparent-gray'>Check Out with Multiple Addresses</Button>
                </div>
            </div>
        </div>
    )
}
