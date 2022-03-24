import Icon from 'components/parts/Icon'
import React, { useState } from 'react'
import { CatalogCategoriesMapType } from 'types/CatalogType'
import styles from './CategoryFilter.module.less'

type PropsType = {
    categoriesMap: CatalogCategoriesMapType
}

export const PageCatalogCategoryFilter: React.FC<PropsType> = ({ categoriesMap }) => {
    const [opened, setOpened] = useState<boolean>(true)

    const categories = Array.from(categoriesMap.keys())

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
                    const count = categoriesMap.get(category)?.length

                    if (!count || count === 0) return null

                    return (
                        <div key={category.id} className={styles.item}>
                            <div className={styles.item__name}>{category.name}</div>
                            <div className={styles.item__count}>{count}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
