import Icon from 'components/parts/Icon'
import { CatalogFilterContext } from 'pages/PageCatalog/PageCatalog'
import React, { useContext, useState } from 'react'
import { CatalogColorsMapType } from 'types/CatalogType'
import styles from './ColorFilter.module.less'

type PropsType = {
    colorsMap: CatalogColorsMapType
}

export const PageCatalogColorFilter: React.FC<PropsType> = ({ colorsMap }) => {
    const [opened, setOpened] = useState<boolean>(true)

    const { filters, setFilters } = useContext(CatalogFilterContext)

    const colors = Array.from(colorsMap.keys())

    const itemClickHandler = (colorCode: string) => {
        const arr = filters.color

        const index = arr.findIndex((color) => color === colorCode)

        if (index >= 0) {
            arr.splice(index, 1)
        } else {
            arr.push(colorCode)
        }

        setFilters({ ...filters, color: arr })
    }

    return (
        <div className={styles.colorfilter}>
            <div className={styles.title} onClick={() => setOpened(!opened)}>
                <h5>Color</h5>
                <div className={`${styles.arrow} ${opened && styles.opened}`}>
                    <Icon name='arrowdown' />
                </div>
            </div>
            <div className={`${styles.list} ${opened && styles.opened}`}>
                {colors.map((color, index) => {
                    const count = colorsMap.get(color)?.length

                    if (!count || count === 0) return null

                    return (
                        <div
                            key={index}
                            className={`${styles.item} ${styles[color]} ${
                                filters.color.includes(color) && styles.selected
                            }`}
                            onClick={() => itemClickHandler(color)}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}
