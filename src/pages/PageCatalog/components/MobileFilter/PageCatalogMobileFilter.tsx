import Button from 'components/buttons/Button'
import Icon from 'components/parts/Icon'
import useAppSelector from 'hooks/useAppSelector'
import useCatalogURLParams from 'hooks/useCatalogURLParams'
import React, { useState } from 'react'
import {
    CatalogBrandsMapType,
    CatalogCategoriesMapType,
    CatalogColorsMapType,
    CatalogParamsFiltersType,
    CatalogPricesMapType,
} from 'types/CatalogType'
import { CategoryType } from 'types/CategoryType'
import { PageCatalogBrandFilter } from '../BrandFilter/PageCatalogBrandFilter'
import { PageCatalogCategoryFilter } from '../CategoryFilter/PageCatalogCategoryFilter'
import { PageCatalogColorFilter } from '../ColorFilter/PageCatalogColorFilter'
import { PageCatalogPriceFilter } from '../PriceFilter/PageCatalogPriceFilter'
import styles from './MobileFilter.module.less'

type PropsType = {
    currentCategory: CategoryType
    categoryMap: CatalogCategoriesMapType
    priceMap: CatalogPricesMapType
    colorMap: CatalogColorsMapType
    brandMap: CatalogBrandsMapType
}

export const PageCatalogMobileFilter: React.FC<PropsType> = ({
    currentCategory,
    categoryMap,
    priceMap,
    colorMap,
    brandMap,
}) => {
    const [opened, setOpened] = useState<boolean>(false)

    const potentialParams = useAppSelector((state) => state.catalog.potential)

    const { setURLParams } = useCatalogURLParams()

    const filtersCount =
        potentialParams.category.length +
        potentialParams.price.length +
        potentialParams.color.length +
        potentialParams.brand.length

    const applyFiltersClickHandler = () => {
        setURLParams({ ...potentialParams, page: 1 })
        setOpened(false)
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
        setOpened(false)
    }

    return (
        <div className={styles.mobilefilter}>
            <div className={styles.openButton} onClick={() => setOpened(true)}>
                Filter
            </div>

            <div className={`${styles.absolute} ${opened && styles.opened}`}>
                <div className={styles.top}>
                    <div>Filter By</div>
                    <div onClick={() => setOpened(false)}>
                        <Icon name='close' />
                    </div>
                </div>
                <PageCatalogCategoryFilter
                    categoriesMap={categoryMap}
                    currentCategory={currentCategory}
                />
                <PageCatalogPriceFilter pricesMap={priceMap} />
                <PageCatalogColorFilter colorsMap={colorMap} />
                <PageCatalogBrandFilter brandsMap={brandMap} />

                <Button preset='blue-white' onClick={() => applyFiltersClickHandler()}>
                    Apply Filters ({filtersCount})
                </Button>
                <Button preset='transparent-gray' onClick={() => clearFiltersClickHandler()}>
                    Clear Filter
                </Button>
            </div>
        </div>
    )
}
