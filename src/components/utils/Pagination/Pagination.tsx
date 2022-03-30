import Icon from 'components/parts/Icon'
import React, { useMemo } from 'react'
import styles from './Pagination.module.less'

type PropsType = {
    total: number
    onPage: number
    current: number
    size?: number
    pageChangeHadler: (page: number) => void
}

export const Pagination: React.FC<PropsType> = ({
    total,
    onPage,
    current,
    size = 10,
    pageChangeHadler,
}) => {
    const pages: number[] = useMemo(
        () =>
            new Array(Math.max(Math.ceil(total / onPage), 1))
                .fill(1)
                .map((value, index) => value + index),
        [total, onPage]
    )

    const itemClickHandler = (page: number) => {
        if (page === current || page < 1 || page > pages.length) return

        pageChangeHadler(page)
    }

    return (
        <div className={styles.pagination}>
            <div className={styles.item}>
                <Icon name='arrowleft' />
            </div>

            {pages.map((page, index) => (
                <div
                    key={index}
                    className={`${styles.item} ${page === current && styles.current}`}
                    onClick={() => itemClickHandler(page)}
                >
                    {page}
                </div>
            ))}

            <div className={styles.item}>
                <Icon name='arrowright' />
            </div>
        </div>
    )
}
