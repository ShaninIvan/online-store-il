import React from 'react'
import Icon from '../Icon'
import styles from './Availability.module.less'

type PropsType = {
    count: number
}

export const Availability: React.FC<PropsType> = ({ count }) => {
    if (count > 0)
        return (
            <div className={`${styles.availability} ${styles.green}`}>
                <div className={styles.circle}>
                    <Icon name='done' size={5} />
                </div>
                in stock
            </div>
        )
    // TODO: обновить иконки (нет phone)
    return (
        <div className={`${styles.availability} ${styles.red}`}>
            <div className={styles.circle}>
                <Icon name='close' size={5} />
            </div>
            check availability
        </div>
    )
}
