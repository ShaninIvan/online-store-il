import React from 'react'
import styles from './Numberbox.module.less'

type PropsType = {
    value: number
    min: number
    max: number
    onChange: (value: number) => void
}

export const Numberbox: React.FC<PropsType> = ({ value, min, max, onChange }) => {
    const incrementHandler = () => {
        value < max && onChange(value + 1)
    }

    const decrementHandler = () => {
        value > min && onChange(value - 1)
    }

    return (
        <div className={styles.numberbox}>
            <div className={styles.value}>{value}</div>

            <div
                className={value < max ? styles.increment : `${styles.increment} ${styles.lock}`}
                onClick={() => incrementHandler()}
            >
                <span className='icon-arrowup'></span>
            </div>

            <div
                className={value > min ? styles.decrement : `${styles.decrement} ${styles.lock}`}
                onClick={() => decrementHandler()}
            >
                <span className='icon-arrowdown'></span>
            </div>
        </div>
    )
}
