import Breadcrumbs from 'components/parts/Breadcrumbs'
import getPath from 'core/routing/getPath'
import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { selectorCategoryCrumbs } from 'store/selectors/selectorCategoryCrumbs'
import { selectorProductCategory } from 'store/selectors/selectorProductCategory'
import { ProductType } from 'types/ProductType'
import styles from './Outlets.module.less'

type PropsType = {
    product: ProductType
}

export const PageProductOutlets: React.FC<PropsType> = ({ product }) => {
    const category = useAppSelector((state) => selectorProductCategory(state, product))
    const crumbs = useAppSelector((state) => selectorCategoryCrumbs(state, category))

    return (
        <div className={styles.outlets}>
            <div className={styles.top}>
                <Breadcrumbs crumbs={crumbs} />
                <h2>{product.name}</h2>
                <div className={styles.review}>Be the first to review this product</div>
                <Outlet context={product} />
            </div>
            <div className={styles.medium}>
                <div className={styles.contact}>
                    Have a Question? <Link to={getPath('/contacts')}>Contact Us</Link>
                </div>
                <div className={styles.code}>{product.code}</div>
            </div>
            <div className={styles.bottom}>+ MORE INFORMATION</div>
        </div>
    )
}
