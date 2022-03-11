import React from 'react'
import styles from './Button.module.less'
import svg from './assets/paypal.svg'

type PropsType = {
    preset:
        | 'tranparent-blue'
        | 'blue-white'
        | 'orange-black'
        | 'transparent-gray'
        | 'black-white'
        | 'transparent-white'
    paypal?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

export const Button: React.FC<PropsType> = ({ children, preset, paypal = false, ...props }) => {
    const classes = `${styles.button} ${styles[preset]}`

    if (paypal)
        return (
            <button className={classes} {...props}>
                {children}
                <img style={{ marginLeft: '7px' }} src={svg} alt='paypal' />
            </button>
        )

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}
