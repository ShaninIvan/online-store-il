import Breadcrumbs from 'components/parts/Breadcrumbs'
import ScreenChecker from 'components/utils/ScreenChecker'
import getPath from 'core/routing/getPath'
import useAppSelector from 'hooks/useAppSelector'
import { ProductColorsMock } from 'pages/PageProduct/PageProductMocks'
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
                <ScreenChecker tablet desktop>
                    <Breadcrumbs crumbs={crumbs} />
                </ScreenChecker>
                <h2>{product.name}</h2>
                <div className={styles.review}>Be the first to review this product</div>
                <Outlet context={product} />
                <div className={styles.colors}>
                    {ProductColorsMock.map((item, index) => (
                        <div
                            key={index}
                            className={styles.colors__item}
                            style={{ background: item }}
                        ></div>
                    ))}
                </div>
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
