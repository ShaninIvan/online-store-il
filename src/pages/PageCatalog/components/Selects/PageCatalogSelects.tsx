import Select from 'components/inputs/Select'
import useAppSelector from 'hooks/useAppSelector'
import useCatalogURLParams from 'hooks/useCatalogURLParams'
import { pageCatalogShowOption, pageCatalogSortOptions } from 'pages/PageCatalog/PageCatalogMocks'
import React from 'react'
import { CatalogParamsShowType, CatalogParamsSortType } from 'types/CatalogType'
import styles from './Selects.module.less'

export const PageCatalogSelects: React.FC = () => {
    const { setURLParams } = useCatalogURLParams()
    const actualParams = useAppSelector((state) => state.catalog.actual)

    const selectSortHandler = (value: CatalogParamsSortType) => {
        setURLParams({ ...actualParams, sort: value })
    }

    const selectShowHandler = (value: CatalogParamsShowType) => {
        setURLParams({ ...actualParams, show: value })
    }

    return (
        <div className={styles.selects}>
            <Select
                options={pageCatalogSortOptions}
                callback={selectSortHandler}
                value={actualParams.sort}
                title='Sort by'
            />
            <Select
                options={pageCatalogShowOption}
                callback={selectShowHandler}
                value={actualParams.show}
                title='Show'
            />
        </div>
    )
}
