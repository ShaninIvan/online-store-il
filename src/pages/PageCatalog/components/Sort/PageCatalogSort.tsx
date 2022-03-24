import Select from 'components/inputs/Select'
import {
    pageCatalogPerpageOption,
    pageCatalogSortOptions,
} from 'pages/PageCatalog/PageCatalogMocks'
import React from 'react'
import styles from './Sort.module.less'

type PropsType = {
    sortHandler: (value: string) => void
    perPageHandler: (value: number) => void
}

export const PageCatalogSort: React.FC<PropsType> = ({ sortHandler, perPageHandler }) => {
    return (
        <div className={styles.sort}>
            <Select options={pageCatalogSortOptions} callback={sortHandler} title='Sort by' />
            <Select options={pageCatalogPerpageOption} callback={perPageHandler} title='Show' />
        </div>
    )
}
