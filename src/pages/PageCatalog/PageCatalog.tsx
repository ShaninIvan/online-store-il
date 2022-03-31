import Button from 'components/buttons/Button'
import Breadcrumbs from 'components/parts/Breadcrumbs'
import Pagination from 'components/utils/Pagination'
import ScreenChecker from 'components/utils/ScreenChecker'
import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import useCatalogParams from 'hooks/useCatalogURLParams'
import useScreenStatus from 'hooks/useScreenStatus'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getProductsIntersection from 'services/Products/getProductsIntersection'
import {
    selectorCatalogBrandFilter,
    selectorCatalogCategoryFilter,
    selectorCatalogColorFilter,
    selectorCatalogPriceFilter,
    selectorCatalogSort,
} from 'store/selectors/selectorCatalogFilters'
import { selectorCatalogMaps } from 'store/selectors/selectorCatalogMaps'
import { selectorCategoryCrumbs } from 'store/selectors/selectorCategoryCrumbs'
import { setCatalogActualParams } from 'store/slices/catalogSlice'
import { CatalogParamsFiltersType } from 'types/CatalogType'
import { PageCatalogActiveFilters } from './components/ActiveFilters/PageCatalogActiveFilters'
import { PageCatalogBackButton } from './components/BackButton/PageCatalogBackButton'
import { PageCatalogBrands } from './components/Brands/PageCatalogBrands'
import { PageCatalogCards } from './components/Cards/PageCatalogCards'
import { PageCatalogCategoryFilter } from './components/CategoryFilter/PageCatalogCategoryFilter'
import { PageCatalogColorFilter } from './components/ColorFilter/PageCatalogColorFilter'
import { PageCatalogCompare } from './components/Compare/PageCatalogCompare'
import { PageCatalogDescription } from './components/Description/PageCatalogDescription'
import { PageCatalogItemsCount } from './components/ItemsCount/PageCatalogItemsCount'
import { PageCatalogMobileFilter } from './components/MobileFilter/PageCatalogMobileFilter'
import { PageCatalogPriceFilter } from './components/PriceFilter/PageCatalogPriceFilter'
import { PageCatalogSelects } from './components/Selects/PageCatalogSelects'
import { PageCatalogView } from './components/View/PageCatalogView'
import { PageCatalogWish } from './components/Wish/PageCatalogWish'
import styles from './PageCatalog.module.less'
import { PageCatalogDescriptionMock } from './PageCatalogMocks'

export const PageCatalog: React.FC = () => {
    const { id } = useParams()
    const potentialParams = useAppSelector((state) => state.catalog.potential)
    const actualParams = useAppSelector((state) => state.catalog.actual)

    const dispatch = useAppDispatch()

    const { currentCategory, fullProductList, categoriesMap, pricesMap, colorsMap, brandsMap } =
        useAppSelector((state) => selectorCatalogMaps(state, id ?? 0))

    // SEARCH PARAMS
    const { getURLParams, setURLParams } = useCatalogParams()

    const { desktop } = useScreenStatus()

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
    const filteredBrandProducts = useAppSelector((state) =>
        selectorCatalogBrandFilter(state, brandsMap, filteredColorProducts)
    )

    const filterIntersection = getProductsIntersection(
        filteredCategoryProducts,
        filteredPriceProducts,
        filteredColorProducts,
        filteredBrandProducts
    )

    const sortedProducts = useAppSelector((state) =>
        selectorCatalogSort(state, [], filterIntersection)
    )

    // VISIBLE DATA
    const productsCount = fullProductList.length
    const crumbs = useAppSelector((state) => selectorCategoryCrumbs(state, currentCategory))
    const filtersCount =
        potentialParams.category.length +
        potentialParams.price.length +
        potentialParams.color.length +
        potentialParams.brand.length

    const countOnPage = desktop ? actualParams.show : 5

    const endProductIndex = actualParams.page * countOnPage
    const startProductIndex = endProductIndex - countOnPage

    const visibleProducts = sortedProducts.slice(startProductIndex, endProductIndex)

    // HANDLERS
    const applyFiltersClickHandler = () => {
        setURLParams({ ...potentialParams, page: 1 })
    }

    const clearFiltersClickHandler = () => {
        const cleanFilters: CatalogParamsFiltersType = {
            category: [],
            price: [],
            color: [],
            brand: [],
            name: '',
        }

        setURLParams({ ...potentialParams, ...cleanFilters, page: 1 })
    }

    const changePageHandler = (page: number) => {
        setURLParams({ ...actualParams, page: page })
    }

    return (
        <div className={styles.pagecatalog}>
            <div className={styles.banner}>
                <img src='https://i.onthe.io/smngoz4vi39k0a9dk.e3d29a71.jpg' alt='banner ASUS' />
            </div>

            <Breadcrumbs crumbs={crumbs} />

            <h2>
                {currentCategory.name} ({productsCount})
            </h2>

            <ScreenChecker desktop>
                <div className={styles.top}>
                    <PageCatalogBackButton />
                    <PageCatalogItemsCount
                        start={startProductIndex + 1}
                        end={endProductIndex}
                        total={sortedProducts.length}
                    />
                    <PageCatalogSelects />
                    <PageCatalogView />
                </div>
            </ScreenChecker>

            <div className={styles.bottom}>
                <ScreenChecker tablet desktop>
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
                </ScreenChecker>

                <div className={styles.right}>
                    <ScreenChecker tablet mobile>
                        <div className={styles.top}>
                            <ScreenChecker tablet>
                                <PageCatalogItemsCount
                                    start={startProductIndex + 1}
                                    end={endProductIndex}
                                    total={sortedProducts.length}
                                />
                                <PageCatalogSelects />
                                <PageCatalogView />
                            </ScreenChecker>

                            <ScreenChecker mobile>
                                <PageCatalogMobileFilter
                                    currentCategory={currentCategory}
                                    categoryMap={categoriesMap}
                                    priceMap={pricesMap}
                                    colorMap={colorsMap}
                                    brandMap={brandsMap}
                                />
                                <PageCatalogSelects />
                                <PageCatalogItemsCount
                                    start={startProductIndex + 1}
                                    end={endProductIndex}
                                    total={sortedProducts.length}
                                />
                            </ScreenChecker>
                        </div>
                    </ScreenChecker>

                    <ScreenChecker tablet desktop>
                        <PageCatalogActiveFilters categoryMap={categoriesMap} />
                    </ScreenChecker>

                    <PageCatalogCards productList={visibleProducts} mode={actualParams.view} />
                    <Pagination
                        total={sortedProducts.length}
                        onPage={countOnPage}
                        current={actualParams.page}
                        pageChangeHadler={changePageHandler}
                    />
                    <ScreenChecker mobile>
                        <PageCatalogCompare />
                        <PageCatalogWish />
                        <aside>
                            <img
                                src='https://i.onthe.io/smngoz1vqjkc34hoqg.a001bda0.jpg'
                                alt='noblechairs'
                            />
                        </aside>
                    </ScreenChecker>
                    <PageCatalogDescription>{PageCatalogDescriptionMock}</PageCatalogDescription>
                </div>
            </div>
        </div>
    )
}
