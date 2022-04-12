import TextBox from 'components/inputs/TextBox'
import Icon from 'components/parts/Icon'
import useAppDispatch from 'hooks/useAppDispatch'
import useSettings from 'hooks/useSettings'
import React, { useState } from 'react'
import { setCartShipping } from 'store/slices/cartSlice'
import styles from './Estimate.module.less'

export const PageCartEstimate: React.FC = () => {
    const { contacts } = useSettings()
    const dispatch = useAppDispatch()

    const [opened, setOpened] = useState<boolean>(true)

    const rateChangeHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value)

        dispatch(setCartShipping(value))
    }

    return (
        <div className={styles.estimate}>
            <div className={styles.title} onClick={() => setOpened(!opened)}>
                Estimate Shipping and Tax
                <span className={`${styles.arrow} ${opened && styles.opened}`}>
                    <Icon name='arrowup' />
                </span>
            </div>
            <div className={`${styles.list} ${opened && styles.opened}`}>
                <div className={styles.description}>
                    Enter your destination to get a shipping estimate.
                </div>

                <label htmlFor='estimate-country'>Country</label>
                <select name='country' id='estimate-country'>
                    <option value='Australia'>Australia</option>
                    <option value='USA'>USA</option>
                </select>
                <TextBox name='state' type='text' label='State/Province' />
                <TextBox name='zip' type='text' label='Zip/Postal Code' />

                <div className={styles.radiogroup}>
                    <label htmlFor='estimate-rate-1'>Standard Rate</label>
                    <span className={styles.radio}>
                        <input
                            type='radio'
                            name='rate'
                            id='estimate-rate-1'
                            value={21}
                            defaultChecked
                            onClick={rateChangeHandler}
                        />
                        <div>
                            Price may vary depending on the item/destination. Shop Staff will
                            contact you. $21.00
                        </div>
                    </span>

                    <label htmlFor='estimate-rate-2'>Pickup from store</label>
                    <span className={styles.radio}>
                        <input
                            type='radio'
                            name='rate'
                            id='estimate-rate-2'
                            value={0}
                            onClick={rateChangeHandler}
                        />
                        <div>{contacts.address} $0.00</div>
                    </span>
                </div>
            </div>
        </div>
    )
}
