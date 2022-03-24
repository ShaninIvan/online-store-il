import Select from 'components/inputs/Select'
import { pageCatalogShowOption, pageCatalogSortOptions } from 'pages/PageCatalog/PageCatalogMocks'
import React from 'react'
import { CatalogParamsShowType, CatalogParamsSortType } from 'types/CatalogType'
import styles from './Selects.module.less'

type PropsType = {
    sort: {
        get: () => CatalogParamsSortType
        set: (value: CatalogParamsSortType) => void
    }
    show: {
        get: () => CatalogParamsShowType
        set: (value: CatalogParamsShowType) => void
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
                options={pageCatalogShowOption}
                callback={show.set}
                value={show.get()}
                title='Show'
            />
        </div>
    )
}
