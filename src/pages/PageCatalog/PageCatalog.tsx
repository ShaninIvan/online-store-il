import Button from 'components/buttons/Button'
import RouteLine from 'components/parts/RouteLine'
import useAppSelector from 'hooks/useAppSelector'
import useCatalogParams from 'hooks/useCatalogParams'
import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import getCatalogBrandsMap from 'services/Catalog/getCatalogBrandsMap'
import getCatalogCategoriesMap from 'services/Catalog/getCatalogCategoriesMap'
import getCatalogColorsMap from 'services/Catalog/getCatalogColorsMap'
import getCatalogPricesMap from 'services/Catalog/getCatalogPricesMap'
import getRouteLineByCategory from 'services/RouteLine/getRouteLineByCategory'
import { CatalogParamsFiltersType } from 'types/CatalogType'
import { CategoryType } from 'types/CategoryType'
import { PageCatalogBackButton } from './components/BackButton/PageCatalogBackButton'
import { PageCatalogCategoryFilter } from './components/CategoryFilter/PageCatalogCategoryFilter'
import { PageCatalogItemsCount } from './components/ItemsCount/PageCatalogItemsCount'
import { PageCatalogPriceFilter } from './components/PriceFilter/PageCatalogPriceFilter'
import { PageCatalogSelects } from './components/Selects/PageCatalogSelects'
import { PageCatalogView } from './components/View/PageCatalogView'
import styles from './PageCatalog.module.less'
import { pageCatalogPrices } from './PageCatalogMocks'

const initialFilters: CatalogParamsFiltersType = {
    category: [],
    price: [],
    color: [],
    name: '',
    brands: [],
}

export const CatalogFilterContext = React.createContext({
    filters: initialFilters,
    setFilters: (state: typeof initialFilters) => {},
})

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

    const [filters, setFilters] = useState<CatalogParamsFiltersType>(initialFilters)

    const currentCategory =
        categories.find((category) => category.id === Number(id)) ?? ourDealsCategory

    // MAPS
    const categoriesMap = useMemo(
        () => getCatalogCategoriesMap(currentCategory, categories, products),
        [categories, currentCategory, products]
    )
    const fullProductList = categoriesMap.get(currentCategory) ?? []

    const pricesMap = useMemo(() => getCatalogPricesMap(products, pageCatalogPrices), [products])
    const brandsMap = useMemo(() => getCatalogBrandsMap(products, brands), [products, brands])
    const colorsMap = useMemo(() => getCatalogColorsMap(products), [products])

    // SEARCH PARAMS
    const params = useCatalogParams()

    // VISIBLE DATA

    const productsCount = fullProductList.length
    const routeLine = getRouteLineByCategory(currentCategory, categories)
    const filtersCount = Object.values(filters).reduce((acc, value) => {
        if (Array.isArray(value)) {
            return acc + value.length
        }
        return acc + 0
    }, 0)

    return (
        <CatalogFilterContext.Provider value={{ filters, setFilters }}>
            <div className={styles.pagecatalog}>
                <div className={styles.banner}>
                    <img
                        src='https://i.onthe.io/smngoz4vi39k0a9dk.e3d29a71.jpg'
                        alt='banner ASUS'
                    />
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
                    <div className={styles.left}>
                        <div className={styles.filters}>
                            <div className={styles.filters__top}>
                                <h4>Filters</h4>
                                <div className={styles.clear}>
                                    <Button preset='transparent-gray'>Clear Filter</Button>
                                </div>
                            </div>

                            <PageCatalogCategoryFilter
                                categoriesMap={categoriesMap}
                                currentCategory={currentCategory}
                            />
                            <PageCatalogPriceFilter pricesMap={pricesMap} />

                            <Button preset='blue-white'>Apply Filters({filtersCount})</Button>
                        </div>
                    </div>

                    <div className={styles.right}></div>
                </div>
            </div>
        </CatalogFilterContext.Provider>
    )
}
