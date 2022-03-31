import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import { useParams } from 'react-router-dom'
import { selectorProduct } from 'store/selectors/selectorProduct'
import { PageProductImages } from './components/Images/PageProductImages'
import { PageProductNav } from './components/Nav/PageProductNav'
import { PageProductOrder } from './components/Order/PageProductOrder'
import { PageProductOutlets } from './components/Outlets/PageProductOutlets'
import styles from './PageProduct.module.less'

export const PageProduct: React.FC = () => {
    const { id } = useParams()
    const product = useAppSelector((state) => selectorProduct(state, Number(id)))

    if (!product) return null

    return (
        <div className={styles.pageproduct}>
            <div className={styles.top}>
                <PageProductNav />
                <PageProductOrder product={product} />
            </div>

            <div className={styles.content}>
                <PageProductOutlets product={product} />
                <PageProductImages product={product} />
            </div>

            <div className={styles.promo}></div>

            <div className={styles.help}></div>

            <div className={styles.featues}></div>
        </div>
    )
}
