import React, { TextareaHTMLAttributes } from 'react'
import styles from './TextArea.module.less'

type PropsType = {
    label?: string
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea: React.FC<PropsType> = ({ label, ...props }) => {
    const req = props.required && label !== '' ? <span className={styles.required}>*</span> : <></>

    return (
        <div className={styles.textarea}>
            <label className={styles.label}>
                {label}
                {req}
            </label>
            <textarea className={styles.input} {...props}></textarea>
        </div>
    )
}
