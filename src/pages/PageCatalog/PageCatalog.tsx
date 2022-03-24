import RouteLine from 'components/parts/RouteLine'
import useAppSelector from 'hooks/useAppSelector'
import useCatalogFunctions from 'hooks/useCatalogFunctions'
import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import getCatalogBrandsMap from 'services/Catalog/getCatalogBrandsMap'
import getCatalogCategoriesMap from 'services/Catalog/getCatalogCategoriesMap'
import getCatalogColorsMap from 'services/Catalog/getCatalogColorsMap'
import getCatalogPricesMap from 'services/Catalog/getCatalogPricesMap'
import getRouteLineByCategory from 'services/RouteLine/getRouteLineByCategory'
import { CategoryType } from 'types/CategoryType'
import { PageCatalogBackButton } from './components/BackButton/PageCatalogBackButton'
import { PageCatalogItemsCount } from './components/ItemsCount/PageCatalogItemsCount'
import { PageCatalogSelects } from './components/Selects/PageCatalogSelects'
import { PageCatalogView } from './components/View/PageCatalogView'
import styles from './PageCatalog.module.less'
import { pageCatalogPrices } from './PageCatalogMocks'

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
    const { brands } = useAppSelector((state) => state.brands)
    const { products } = useAppSelector((state) => state.products)

    const currentCategory =
        categories.find((category) => category.id === Number(id)) ?? ourDealsCategory

    // MAPS
    const categoriesMap = useMemo(
        () => getCatalogCategoriesMap(currentCategory, categories, products),
        [categories, currentCategory, products]
    )
    const pricesMap = useMemo(() => getCatalogPricesMap(products, pageCatalogPrices), [products])
    const brandsMap = useMemo(() => getCatalogBrandsMap(products, brands), [products, brands])
    const colorsMap = useMemo(() => getCatalogColorsMap(products), [products])

    // SEARCH PARAMS
    const params = useCatalogFunctions()

    // VISIBLE DATA
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

            <div className={styles.top}>
                <PageCatalogBackButton />
                <PageCatalogItemsCount start={0} end={10} total={20} />
                <PageCatalogSelects sort={params.sort} show={params.show} />
                <PageCatalogView current={params.view.get()} changeHandler={params.view.set} />
            </div>

            <div className={styles.bottom}>
                <div className={styles.filters}></div>
                <div className={styles.cards}></div>
            </div>
        </div>
    )
}
