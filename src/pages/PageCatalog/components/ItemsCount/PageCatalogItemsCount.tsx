import React from 'react'
import styles from './ItemsCount.module.less'

type PropsType = {
    start: number
    end: number
    total: number
}

export const PageCatalogItemsCount: React.FC<PropsType> = ({ start, end, total }) => {
    return (
        <div className={styles.itemscount}>
            Items {start}–{end} of {total}
        </div>
    )
}
