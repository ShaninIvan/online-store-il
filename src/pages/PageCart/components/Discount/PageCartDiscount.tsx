import Button from 'components/buttons/Button'
import TextBox from 'components/inputs/TextBox'
import Icon from 'components/parts/Icon'
import React, { useState } from 'react'
import styles from './Discount.module.less'

export const PageCartDiscount: React.FC = () => {
    const [opened, setOpened] = useState<boolean>(true)

    return (
        <div className={styles.discount}>
            <div className={styles.title} onClick={() => setOpened(!opened)}>
                Apply Discount Code
                <span className={`${styles.arrow} ${opened && styles.opened}`}>
                    <Icon name='arrowup' />
                </span>
            </div>
            <div className={`${styles.list} ${opened && styles.opened}`}>
                <TextBox
                    type='text'
                    name='discount'
                    label='Enter discount code'
                    placeholder='Enter Discount code'
                />
                <Button preset='tranparent-blue'>Apply Discount</Button>
            </div>
        </div>
    )
}
