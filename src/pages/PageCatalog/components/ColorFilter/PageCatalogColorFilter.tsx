import Icon from 'components/parts/Icon'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React, { useState } from 'react'
import { setCatalogPotentialParams } from 'store/slices/catalogSlice'
import { CatalogColorsMapType } from 'types/CatalogType'
import styles from './ColorFilter.module.less'

type PropsType = {
    colorsMap: CatalogColorsMapType
}

export const PageCatalogColorFilter: React.FC<PropsType> = ({ colorsMap }) => {
    const [opened, setOpened] = useState<boolean>(true)

    const dispatch = useAppDispatch()

    const filter = useAppSelector((state) => state.catalog.potential.color)

    const colors = Array.from(colorsMap.keys())

    const itemClickHandler = (colorCode: string) => {
        const arr = [...filter]

        const index = arr.findIndex((color) => color === colorCode)

        if (index >= 0) {
            arr.splice(index, 1)
        } else {
            arr.push(colorCode)
        }

        dispatch(setCatalogPotentialParams({ color: arr }))
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
                                filter.includes(color) && styles.selected
                            }`}
                            onClick={() => itemClickHandler(color)}
                        ></div>
                    )
                })}
            </div>
        </div>
    )
}
