import React from 'react'
import Icon from '../Icon'
import styles from './Facilities.module.less'

type PropsType = {
    background: 'white' | 'ghostly'
}

export const Facilities: React.FC<PropsType> = ({ background }) => {
    return (
        <div className={`${styles.facilities} ${styles[background]}`}>
            <div className={styles.block}>
                <div className={styles.circle}>
                    <Icon name='support' />
                </div>
                <div className={styles.title}>Product Support</div>
                <div className={styles.text}>
                    Up to 3 years on-site warranty available for your peace of mind.
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.circle}>
                    <Icon name='account' />
                </div>
                <div className={styles.title}>Personal Account</div>
                <div className={styles.text}>
                    With big discounts, free delivery and a dedicated support specialist.
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.circle}>
                    <Icon name='savings' />
                </div>
                <div className={styles.title}>Amazing Savings</div>
                <div className={styles.text}>
                    Up to 70% off new Products, you can be sure of the best price.
                </div>
            </div>
        </div>
    )
}
