import LargeCard from 'components/cards/LargeCard'
import SmallCard from 'components/cards/SmallCard'
import getPath from 'core/routing/getPath'
import useScreenStatus from 'hooks/useScreenStatus'
import useSettings from 'hooks/useSettings'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CatalogParamsViewType } from 'types/CatalogType'
import { ProductType } from 'types/ProductType'
import styles from './Cards.module.less'

type PropsType = {
    productList: ProductType[]
    mode?: CatalogParamsViewType
}

export const PageCatalogCards: React.FC<PropsType> = ({ productList, mode = 'grid' }) => {
    const navigate = useNavigate()
    const { discount } = useSettings()

    const cardClickHandler = (id: number) => {
        navigate(getPath('/product/:id', { id: id }))
    }

    const { mobile, tablet } = useScreenStatus()

    if (productList.length === 0)
        return <div className={styles.empty}>There's nothing here. Try changing filters.</div>

    if (mobile)
        return (
            <div className={styles.cards}>
                {productList.map((product) => (
                    <SmallCard
                        key={product.id}
                        product={product}
                        discount={discount}
                        onCardClick={cardClickHandler}
                        mobile={true}
                    />
                ))}
            </div>
        )

    if (mode === 'grid')
        return (
            <div className={styles.cards}>
                {productList.map((product) => (
                    <SmallCard
                        key={product.id}
                        product={product}
                        discount={discount}
                        onCardClick={cardClickHandler}
                        mobile={tablet ? true : false}
                    />
                ))}
            </div>
        )

    if (mode === 'list')
        return (
            <div className={styles.cards}>
                {productList.map((product) => (
                    <LargeCard
                        key={product.id}
                        product={product}
                        discount={discount}
                        onCardClick={cardClickHandler}
                    />
                ))}
            </div>
        )

    return null
}
