import { createSearchParams, useSearchParams } from 'react-router-dom'
import {
    CatalogParamsFiltersType,
    CatalogParamsShowType,
    CatalogParamsSortType,
    CatalogParamsViewType,
} from 'types/CatalogType'

enum KEYS {
    sort = 'sort',
    show = 'show',
    view = 'view',
    category = 'category',
    price = 'price',
    color = 'color',
    name = 'name',
    brand = 'brand',
}

const useCatalogParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const getCurrentParams = () => {
        const params: { [key in KEYS]: any } = {
            sort: paramSort.get(),
            show: paramShow.get(),
            view: paramView.get(),
            category: paramCategory.get(),
            price: paramPrice.get(),
            color: paramColor.get(),
            name: paramName.get(),
            brand: paramBrand.get(),
        }

        return params
    }

    const updateSingleParam = (key: KEYS, value: any) => {
        const params = getCurrentParams()
        params[key] = value

        const urlParams = createSearchParams(params)
        setSearchParams(urlParams)
    }

    const updateFilters = ({ category, price, color, brand, name }: CatalogParamsFiltersType) => {
        const params = getCurrentParams()

        params['category'] = category
        params['price'] = price
        params['color'] = color
        params['name'] = name
        params['brand'] = brand

        const urlParams = createSearchParams(params)
        setSearchParams(urlParams)
    }

    const paramSort = {
        get: (): CatalogParamsSortType => {
            const data = searchParams.get(KEYS.sort)

            if (data && ['position', 'name', 'price'].includes(data)) {
                return data as CatalogParamsSortType
            }

            return 'position'
        },
        set: (sort: CatalogParamsSortType) => updateSingleParam(KEYS.sort, sort),
    }

    const paramShow = {
        get: (): CatalogParamsShowType => {
            const data = Number(searchParams.get(KEYS.show))

            if ([5, 15, 25].includes(data)) return data as CatalogParamsShowType
            return 5
        },
        set: (count: number) => updateSingleParam(KEYS.show, count),
    }

    const paramView = {
        get: (): CatalogParamsViewType => {
            const data = searchParams.get(KEYS.view)

            if (data && ['grid', 'list'].includes(data)) return data as CatalogParamsViewType
            return 'grid'
        },
        set: (mode: CatalogParamsViewType) => updateSingleParam(KEYS.view, mode),
    }

    const paramCategory = {
        get: (): CatalogParamsFiltersType['category'] => {
            const data = searchParams.getAll(KEYS.category)
            if (!data) return []
            return data.map((item) => Number(item))
        },
    }

    const paramPrice = {
        get: (): CatalogParamsFiltersType['price'] => {
            const data = searchParams.getAll(KEYS.price)
            if (!data) return []
            return data
        },
    }

    const paramColor = {
        get: (): CatalogParamsFiltersType['color'] => {
            const data = searchParams.getAll(KEYS.color)
            if (!data) return []
            return data
        },
    }

    const paramName = {
        get: (): CatalogParamsFiltersType['name'] => {
            const data = searchParams.get(KEYS.name) ?? ''
            return data
        },
    }

    const paramBrand = {
        get: (): CatalogParamsFiltersType['brand'] => {
            const data = searchParams.getAll(KEYS.brand)
            if (!data) return []
            return data.map((item) => Number(item))
        },
    }

    return {
        paramSort,
        paramShow,
        paramView,
        paramCategory,
        paramPrice,
        paramColor,
        paramBrand,
        paramName,
        updateFilters,
    }
}

export default useCatalogParams
