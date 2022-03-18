import Button from 'components/buttons/Button'
import SmallCard from 'components/cards/SmallCard'
import Brands from 'components/parts/Brands'
import Icon from 'components/parts/Icon'
import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    navResetMenu,
    navSetLevel1,
    navSetLevel2,
    navSetLevel3,
    navSetVariants,
} from 'store/slices/navigationSlice'
import { CategoryType } from 'types/CategoryType'
import { ProductType } from 'types/ProductType'
import styles from './Navbar.module.less'

const getLevel = (category: CategoryType, categories: CategoryType[]) => {
    const ids = category.subcategories.map((item) => item.id)

    return {
        level: categories.filter((item) => ids.includes(item.id)),
        parent: {
            id: category.id,
            name: category.name,
        },
    }
}

const getVariants = (products: ProductType[], categoryId: number, count: 2 | 3 | 4) => {
    return products
        .filter((product) => product.category && product.category.id === categoryId)
        .splice(0, count)
}

const checkSubcategories = (category: CategoryType) => {
    return category.subcategories.length > 0
}

export const Navbar: React.FC = () => {
    const { categories } = useAppSelector((state) => state.categories)
    const { level1, parent1, level2, parent2, level3, parent3, variants } = useAppSelector(
        (state) => state.navigation
    )
    const { settings } = useAppSelector((state) => state.settings)
    const { products } = useAppSelector((state) => state.products)

    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const mains = categories.filter((category) => category.parent === null)

    const openCatalog = (id: number | string) => {
        navigate(getPath(Paths.catalog, { id: id }))
        dispatch(navResetMenu())
    }

    const openProduct = (id: number) => {
        navigate(getPath(Paths.productAbout, { id: id }))
        dispatch(navResetMenu())
    }

    return (
        <nav className={styles.navbar} onMouseLeave={() => dispatch(navResetMenu())}>
            {/* MAIN CATEGORIES */}
            {mains.map((category) => {
                return category.subcategories.length > 0 ? (
                    <div
                        key={category.id}
                        className={`${styles.main} ${category.id === parent1?.id && styles.parent}`}
                        onMouseEnter={() => dispatch(navSetLevel1(getLevel(category, categories)))}
                        onClick={() => openCatalog(category.id)}
                    >
                        {category.name}
                    </div>
                ) : (
                    <div key={category.id} onClick={() => openCatalog(category.id)}>
                        {category.name}
                    </div>
                )
            })}
            <Button preset='tranparent-blue' onClick={() => openCatalog('ourdeals')}>
                Our Deals
            </Button>

            {/* SUBMENU */}

            <div className={`${styles.submenu} ${parent1 && styles.show}`}>
                <div className={styles.top}>
                    {/* SUBMENU LEVEL 1 */}
                    <div className={styles.level1}>
                        {level1.map((category) => (
                            <div
                                key={category.id}
                                className={`${styles.item} ${
                                    category.id === parent2?.id && styles.parent
                                }`}
                                onClick={() => openCatalog(category.id)}
                                onMouseEnter={() => {
                                    dispatch(navSetLevel2(getLevel(category, categories)))
                                    dispatch(navSetVariants(getVariants(products, category.id, 4)))
                                }}
                            >
                                {category.name}
                                {checkSubcategories(category) && (
                                    <Icon name='arrowright' size={8} />
                                )}
                            </div>
                        ))}
                    </div>
                    {/* SUBMENU LEVEL 2 */}
                    <div className={`${styles.level2} ${level2.length > 0 && styles.show}`}>
                        {level2.map((category) => (
                            <div
                                key={category.id}
                                className={`${styles.item} ${
                                    category.id === parent3?.id && styles.parent
                                }`}
                                onClick={() => openCatalog(category.id)}
                                onMouseEnter={() => {
                                    dispatch(navSetLevel3(getLevel(category, categories)))
                                    dispatch(navSetVariants(getVariants(products, category.id, 3)))
                                }}
                            >
                                {category.name}
                                {checkSubcategories(category) && (
                                    <Icon name='arrowright' size={8} />
                                )}
                            </div>
                        ))}
                    </div>
                    {/* SUBMENU LEVEL 3 */}
                    <div className={`${styles.level3} ${level3.length > 0 && styles.show}`}>
                        {level3.map((category) => (
                            <div
                                key={category.id}
                                className={styles.item}
                                onClick={() => openCatalog(category.id)}
                                onMouseEnter={() =>
                                    dispatch(navSetVariants(getVariants(products, category.id, 2)))
                                }
                            >
                                {category.name}
                            </div>
                        ))}
                    </div>
                    {/* SUBMENU VARIANTS */}
                    <div className={styles.variants}>
                        {variants.map((product) => (
                            <SmallCard
                                key={product.id}
                                product={product}
                                discount={settings.discount}
                                onCardClick={openProduct}
                            />
                        ))}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <Brands />
                </div>
            </div>
        </nav>
    )
}
