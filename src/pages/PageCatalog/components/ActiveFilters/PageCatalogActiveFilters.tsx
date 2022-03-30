import Icon from 'components/parts/Icon'
import useAppSelector from 'hooks/useAppSelector'
import useCatalogURLParams from 'hooks/useCatalogURLParams'
import React from 'react'
import { CatalogCategoriesMapType } from 'types/CatalogType'
import styles from './ActiveFilters.module.less'

type PropsType = {
    categoryMap: CatalogCategoriesMapType
}

export const PageCatalogActiveFilters: React.FC<PropsType> = ({ categoryMap }) => {
    const { setURLParams } = useCatalogURLParams()

    const actualParams = useAppSelector((state) => state.catalog.actual)

    const categories = Array.from(categoryMap.keys()).filter((category) =>
        actualParams.category.includes(category.id)
    )

    if (categories.length === 0) return null

    const clickRemoveHandler = (categoryId: number) => {
        const updateList = [...actualParams.category].filter((id) => id !== categoryId)
        setURLParams({ ...actualParams, category: updateList })
    }

    const clickRemoveAllHandler = () => {
        setURLParams({ ...actualParams, category: [] })
    }

    return (
        <div className={styles.activefilters}>
            {categories.map((category) => (
                <div className={styles.item}>
                    {category.name}
                    <span className={styles.count}>({categoryMap.get(category)?.length})</span>
                    <div className={styles.remove} onClick={() => clickRemoveHandler(category.id)}>
                        <Icon name='close' />
                    </div>
                </div>
            ))}
            <div className={styles.item} onClick={() => clickRemoveAllHandler()}>
                Clear All
            </div>
        </div>
    )
}
