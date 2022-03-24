import Select from 'components/inputs/Select'
import {
    pageCatalogPerpageOption,
    pageCatalogSortOptions,
} from 'pages/PageCatalog/PageCatalogMocks'
import React from 'react'
import styles from './Selects.module.less'

type PropsType = {
    sort: {
        get: () => string
        set: (value: string) => void
    }
    show: {
        get: () => number
        set: (value: number) => void
    }
}

export const PageCatalogSelects: React.FC<PropsType> = ({ sort, show }) => {
    return (
        <div className={styles.selects}>
            <Select
                options={pageCatalogSortOptions}
                callback={sort.set}
                value={sort.get()}
                title='Sort by'
            />
            <Select
                options={pageCatalogPerpageOption}
                callback={show.set}
                value={show.get()}
                title='Show'
            />
        </div>
    )
}
