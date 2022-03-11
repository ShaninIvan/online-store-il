import Icon from 'components/parts/Icon'
import React, { InputHTMLAttributes } from 'react'
import styles from './SearchBox.module.less'

type PropsType = InputHTMLAttributes<HTMLInputElement>

export const SearchBox: React.FC<PropsType> = ({ ...props }) => {
    return (
        <div className={styles.searchbox}>
            <input {...props} className={styles.input} type='text' />
            <Icon name='find' color='#0156FF' />
        </div>
    )
}
