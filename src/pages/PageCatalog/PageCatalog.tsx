import RouteLine from 'components/parts/RouteLine'
import useAppSelector from 'hooks/useAppSelector'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import getCatalogCategoriesMap from 'services/Catalog/getCatalogCategoriesMap'
import getRouteLineByCategory from 'services/RouteLine/getRouteLineByCategory'
import { CategoryType } from 'types/CategoryType'
import styles from './PageCatalog.module.less'

const ourDealsCategory: CategoryType = {
    id: -1,
    name: 'Our deals',
    parent: null,
    subcategories: [],
    image: [],
}

export const PageCatalog: React.FC = () => {
    const { id } = useParams()
    const { categories } = useAppSelector((state) => state.categories)
    const { products } = useAppSelector((state) => state.products)

    const currentCategory =
        categories.find((category) => category.id === Number(id)) ?? ourDealsCategory

    const categoriesMap = useMemo(
        () => getCatalogCategoriesMap(currentCategory, categories, products),
        [categories, currentCategory, products]
    )

    const productsCount = categoriesMap.get(currentCategory)?.length

    const routeLine = getRouteLineByCategory(currentCategory, categories)

    return (
        <div className={styles.pagecatalog}>
            <div className={styles.banner}>
                <img src='https://i.onthe.io/smngoz4vi39k0a9dk.e3d29a71.jpg' alt='banner ASUS' />
            </div>
            <RouteLine routes={routeLine} />
            <h2>
                {currentCategory.name} ({productsCount})
            </h2>
        </div>
    )
}
