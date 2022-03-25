import Button from 'components/buttons/Button'
import RouteLine from 'components/parts/RouteLine'
import useAppSelector from 'hooks/useAppSelector'
import useCatalogParams from 'hooks/useCatalogParams'
import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import applyCatalogCategoryFilter from 'services/Catalog/applyCatalogCategoryFilter'
import applyCataogPriceFilter from 'services/Catalog/applyCataogPriceFilter'
import getCatalogBrandsMap from 'services/Catalog/getCatalogBrandsMap'
import getCatalogCategoriesMap from 'services/Catalog/getCatalogCategoriesMap'
import getCatalogColorsMap from 'services/Catalog/getCatalogColorsMap'
import getCatalogPricesMap from 'services/Catalog/getCatalogPricesMap'
import getCatalogSortedProducts from 'services/Catalog/getCatalogSortedProducts'
import getProductsIntersection from 'services/Products/getProductsIntersection'
import getRouteLineByCategory from 'services/RouteLine/getRouteLineByCategory'
import { CatalogParamsFiltersType } from 'types/CatalogType'
import { CategoryType } from 'types/CategoryType'
import { PageCatalogBackButton } from './components/BackButton/PageCatalogBackButton'
import { PageCatalogCards } from './components/Cards/PageCatalogCards'
import { PageCatalogCategoryFilter } from './components/CategoryFilter/PageCatalogCategoryFilter'
import { PageCatalogColorFilter } from './components/ColorFilter/PageCatalogColorFilter'
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
    brand: [],
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

    const currentCategory =
        categories.find((category) => category.id === Number(id)) ?? ourDealsCategory

    // MAPS
    const categoriesMap = useMemo(
        () => getCatalogCategoriesMap(currentCategory, categories, products),
        [categories, currentCategory, products]
    )
    const fullProductList = useMemo(
        () => categoriesMap.get(currentCategory) ?? [],
        [categoriesMap, currentCategory]
    )

    const pricesMap = useMemo(
        () => getCatalogPricesMap(fullProductList, pageCatalogPrices),
        [fullProductList]
    )
    const brandsMap = useMemo(
        () => getCatalogBrandsMap(fullProductList, brands),
        [fullProductList, brands]
    )
    const colorsMap = useMemo(() => getCatalogColorsMap(fullProductList), [fullProductList])

    // SEARCH PARAMS
    const {
        paramSort,
        paramShow,
        paramView,
        paramCategory,
        paramPrice,
        paramColor,
        paramName,
        paramBrand,
        updateFilters,
    } = useCatalogParams()

    const [filters, setFilters] = useState<CatalogParamsFiltersType>({
        category: paramCategory.get(),
        price: paramPrice.get(),
        color: paramColor.get(),
        name: paramName.get(),
        brand: paramBrand.get(),
    })

    // APPLY FILTER & SORT
    const categoryList = paramCategory.get()
    const productListByCategory =
        categoryList.length === 0
            ? fullProductList
            : applyCatalogCategoryFilter(categoriesMap, categoryList)

    const priceList = paramPrice.get()
    const productListByPrice =
        priceList.length === 0
            ? productListByCategory
            : applyCataogPriceFilter(pricesMap, priceList)

    const productListIntersection = getProductsIntersection(
        productListByCategory,
        productListByPrice
    )

    const sort = paramSort.get()
    const sortedProductList = getCatalogSortedProducts(productListIntersection, sort)
    // VISIBLE DATA

    const productsCount = fullProductList.length
    const routeLine = getRouteLineByCategory(currentCategory, categories)
    const filtersCount = Object.values(filters).reduce((acc, value) => {
        if (Array.isArray(value)) {
            return acc + value.length
        }
        return acc + 0
    }, 0)

    // HANDLERS
    const applyFiltersClickHandler = () => {
        const params: CatalogParamsFiltersType = {
            category: filters.category,
            price: filters.price,
            color: filters.color,
            name: filters.name,
            brand: filters.brand,
        }

        updateFilters(params)
    }

    const clearFiltersClickHandler = () => {
        setFilters(initialFilters)
        updateFilters(initialFilters)
    }

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
                    <PageCatalogSelects sort={paramSort} show={paramShow} />
                    <PageCatalogView current={paramView.get()} changeHandler={paramView.set} />
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
                    </div>

                    <div className={styles.right}>
                        <PageCatalogCards productList={sortedProductList} mode={paramView.get()} />
                    </div>
                </div>
            </div>
        </CatalogFilterContext.Provider>
    )
}
