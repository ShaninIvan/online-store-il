import Icon from 'components/parts/Icon'
import React from 'react'
import styles from './Circle.module.less'

type PropsType = {
    type: 'heart' | 'stats' | 'email'
    callback: () => void
}

export const Circle: React.FC<PropsType> = ({ type, callback }) => {
    return (
        <div className={styles.circle} onClick={() => callback()}>
            <Icon name={type} />
        </div>
    )
}
