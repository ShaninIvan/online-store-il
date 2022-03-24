import Icon from 'components/parts/Icon'
import React from 'react'
import styles from './View.module.less'

type PropsType = {
    current: 'grid' | 'list'
    changeHandler: (mode: 'grid' | 'list') => void
}

export const PageCatalogView: React.FC<PropsType> = ({ current, changeHandler }) => {
    const gridClickHandler = () => {
        if (current !== 'grid') changeHandler('grid')
    }

    const listClickHandler = () => {
        if (current !== 'list') changeHandler('list')
    }

    return (
        <div className={styles.view}>
            <div
                className={`${styles.mode} ${current === 'grid' && styles.active}`}
                onClick={() => gridClickHandler()}
            >
                <Icon name='grid' />
            </div>
            <div
                className={`${styles.mode} ${current === 'list' && styles.active}`}
                onClick={() => listClickHandler()}
            >
                <Icon name='list' />
            </div>
        </div>
    )
}
