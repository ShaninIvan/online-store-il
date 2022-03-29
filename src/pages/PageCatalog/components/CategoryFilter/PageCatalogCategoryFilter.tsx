import Icon from 'components/parts/Icon'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React, { useState } from 'react'
import { setCatalogPotentialParams } from 'store/slices/catalogSlice'
import { CatalogCategoriesMapType } from 'types/CatalogType'
import { CategoryType } from 'types/CategoryType'
import styles from './CategoryFilter.module.less'

type PropsType = {
    currentCategory: CategoryType
    categoriesMap: CatalogCategoriesMapType
}

export const PageCatalogCategoryFilter: React.FC<PropsType> = ({
    categoriesMap,
    currentCategory,
}) => {
    const [opened, setOpened] = useState<boolean>(true)

    const dispatch = useAppDispatch()

    const filter = useAppSelector((state) => state.catalog.potential.category)

    const categories = Array.from(categoriesMap.keys())

    const itemClickHandler = (categoryId: number) => {
        const arr = [...filter]

        const index = arr.findIndex((id) => id === categoryId)

        if (index >= 0) {
            arr.splice(index, 1)
        } else {
            arr.push(categoryId)
        }

        dispatch(setCatalogPotentialParams({ category: arr }))
    }

    return (
        <div className={styles.categoryfilter}>
            <div className={styles.title} onClick={() => setOpened(!opened)}>
                <h5>Category</h5>
                <div className={`${styles.arrow} ${opened && styles.opened}`}>
                    <Icon name='arrowdown' />
                </div>
            </div>
            <div className={`${styles.list} ${opened && styles.opened}`}>
                {categories.map((category) => {
                    if (category === currentCategory) return null

                    const count = categoriesMap.get(category)?.length

                    if (!count || count === 0) return null

                    return (
                        <div
                            key={category.id}
                            className={`${styles.item} ${
                                filter.includes(category.id) && styles.selected
                            }`}
                            onClick={() => itemClickHandler(category.id)}
                        >
                            <div className={styles.item__name}>{category.name}</div>
                            <div className={styles.item__count}>{count}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
