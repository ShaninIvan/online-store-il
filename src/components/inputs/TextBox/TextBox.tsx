import React from 'react'
import styles from './TextBox.module.less'

type PropsType = {
    type: 'text' | 'password' | 'email' | 'tel'
    name: string
    label?: string
    required?: boolean
    placeholder?: string
}

export const TextBox: React.FC<PropsType> = ({
    type,
    name,
    label = '',
    required = false,
    placeholder = '',
}) => {
    const req =
        required && label !== '' ? (
            <span className={styles.required}>*</span>
        ) : (
            <></>
        )

    return (
        <div className={styles.textbox}>
            <label className={styles.label}>
                {label}
                {req}
            </label>
            <input
                className={styles.input}
                type={type}
                name={name}
                required={required}
                placeholder={placeholder}
            ></input>
        </div>
    )
}
