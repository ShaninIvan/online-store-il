import Icon from 'components/parts/Icon'
import useAppSelector from 'hooks/useAppSelector'
import useCatalogURLParams from 'hooks/useCatalogURLParams'
import React from 'react'
import { CatalogParamsViewType } from 'types/CatalogType'
import styles from './View.module.less'

export const PageCatalogView: React.FC = () => {
    const { setURLParams } = useCatalogURLParams()
    const actual = useAppSelector((state) => state.catalog.actual)

    const changeViewHandler = (value: CatalogParamsViewType) => {
        setURLParams({ ...actual, view: value })
    }

    const gridClickHandler = () => {
        if (actual.view !== 'grid') changeViewHandler('grid')
    }

    const listClickHandler = () => {
        if (actual.view !== 'list') changeViewHandler('list')
    }

    return (
        <div className={styles.view}>
            <div
                className={`${styles.mode} ${actual.view === 'grid' && styles.active}`}
                onClick={() => gridClickHandler()}
            >
                <Icon name='grid' />
            </div>
            <div
                className={`${styles.mode} ${actual.view === 'list' && styles.active}`}
                onClick={() => listClickHandler()}
            >
                <Icon name='list' />
            </div>
        </div>
    )
}
