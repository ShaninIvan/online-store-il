import Button from 'components/buttons/Button'
import RouteLine from 'components/parts/RouteLine'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import useCatalogParams from 'hooks/useCatalogURLParams'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getProductsIntersection from 'services/Products/getProductsIntersection'
import getRouteLineByCategory from 'services/RouteLine/getRouteLineByCategory'
import {
    selectorCatalogCategoryFilter,
    selectorCatalogColorFilter,
    selectorCatalogPriceFilter,
    selectorCatalogSort,
} from 'store/selectors/selectorCatalogFilters'
import { selectorCatalogMaps } from 'store/selectors/selectorCatalogMaps'
import { setCatalogActualParams } from 'store/slices/catalogSlice'
import { CatalogParamsFiltersType } from 'types/CatalogType'
import { PageCatalogBackButton } from './components/BackButton/PageCatalogBackButton'
import { PageCatalogBrands } from './components/Brands/PageCatalogBrands'
import { PageCatalogCards } from './components/Cards/PageCatalogCards'
import { PageCatalogCategoryFilter } from './components/CategoryFilter/PageCatalogCategoryFilter'
import { PageCatalogColorFilter } from './components/ColorFilter/PageCatalogColorFilter'
import { PageCatalogCompare } from './components/Compare/PageCatalogCompare'
import { PageCatalogItemsCount } from './components/ItemsCount/PageCatalogItemsCount'
import { PageCatalogPriceFilter } from './components/PriceFilter/PageCatalogPriceFilter'
import { PageCatalogSelects } from './components/Selects/PageCatalogSelects'
import { PageCatalogView } from './components/View/PageCatalogView'
import { PageCatalogWish } from './components/Wish/PageCatalogWish'
import styles from './PageCatalog.module.less'

export const PageCatalog: React.FC = () => {
    const { id } = useParams()
    const { categories } = useAppSelector((state) => state.categories)
    const potentialParams = useAppSelector((state) => state.catalog.potential)
    const actualParams = useAppSelector((state) => state.catalog.actual)

    const dispatch = useAppDispatch()

    const { currentCategory, fullProductList, categoriesMap, pricesMap, colorsMap, brandsMap } =
        useAppSelector((state) => selectorCatalogMaps(state, id ?? 0))

    // SEARCH PARAMS
    const { getURLParams, setURLParams } = useCatalogParams()

    const params = getURLParams()

    useEffect(() => {
        dispatch(setCatalogActualParams(params))
    }, [dispatch, params])

    // APPLY FILTER & SORT
    const filteredCategoryProducts = useAppSelector((state) =>
        selectorCatalogCategoryFilter(state, categoriesMap, fullProductList)
    )
    const filteredPriceProducts = useAppSelector((state) =>
        selectorCatalogPriceFilter(state, pricesMap, filteredCategoryProducts)
    )
    const filteredColorProducts = useAppSelector((state) =>
        selectorCatalogColorFilter(state, colorsMap, filteredPriceProducts)
    )

    const filterIntersection = getProductsIntersection(
        filteredCategoryProducts,
        filteredPriceProducts,
        filteredColorProducts
    )

    const sortedProducts = useAppSelector((state) =>
        selectorCatalogSort(state, [], filterIntersection)
    )

    // VISIBLE DATA
    const productsCount = fullProductList.length
    const routeLine = getRouteLineByCategory(currentCategory, categories)
    const filtersCount =
        potentialParams.category.length +
        potentialParams.price.length +
        potentialParams.color.length +
        potentialParams.brand.length

    // HANDLERS
    const applyFiltersClickHandler = () => {
        setURLParams(potentialParams)
    }

    const clearFiltersClickHandler = () => {
        const cleanFilters: CatalogParamsFiltersType = {
            category: [],
            price: [],
            color: [],
            brand: [],
            name: '',
        }

        setURLParams({ ...potentialParams, ...cleanFilters })
    }

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
                <PageCatalogSelects />
                <PageCatalogView />
            </div>

            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.filters}>
                        <div className={styles.filters__top}>
                            <h4>Filters</h4>
                            <div className={styles.clear}>
                                <Button
                                    preset='transparent-gray'
                                    onClick={() => clearFiltersClickHandler()}
                                >
                                    Clear Filter
                                </Button>
                            </div>
                        </div>

                        <PageCatalogCategoryFilter
                            categoriesMap={categoriesMap}
                            currentCategory={currentCategory}
                        />
                        <PageCatalogPriceFilter pricesMap={pricesMap} />
                        <PageCatalogColorFilter colorsMap={colorsMap} />

                        <Button preset='blue-white' onClick={() => applyFiltersClickHandler()}>
                            Apply Filters({filtersCount})
                        </Button>
                    </div>

                    <PageCatalogBrands brandsMap={brandsMap} />
                    <PageCatalogCompare />
                    <PageCatalogWish />
                    <aside>
                        <img
                            src='https://i.onthe.io/smngoz1vqjkc34hoqg.a001bda0.jpg'
                            alt='noblechairs'
                        />
                    </aside>
                </div>

                <div className={styles.right}>
                    <PageCatalogCards productList={sortedProducts} mode={actualParams.view} />
                </div>
            </div>
        </div>
    )
}
