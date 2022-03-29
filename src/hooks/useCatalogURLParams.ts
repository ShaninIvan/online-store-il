import { useRef } from 'react'
import { createSearchParams, useLocation, useSearchParams } from 'react-router-dom'
import {
    CatalogParamsFiltersType,
    CatalogParamsShowType,
    CatalogParamsSortType,
    CatalogParamsViewType,
    CatalogStateType,
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
    page = 'page',
}

const useCatalogURLParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const location = useLocation()
    const locationRef = useRef<string>()
    const cacheRef = useRef<CatalogStateType['actual']>()

    const getParamSort = (): CatalogParamsSortType => {
        const data = searchParams.get(KEYS.sort)

        if (data && ['position', 'name', 'price'].includes(data)) {
            return data as CatalogParamsSortType
        }

        return 'position'
    }

    const getParamShow = (): CatalogParamsShowType => {
        const data = Number(searchParams.get(KEYS.show))

        if ([5, 15, 25].includes(data)) return data as CatalogParamsShowType
        return 5
    }

    const getParamView = (): CatalogParamsViewType => {
        const data = searchParams.get(KEYS.view)

        if (data && ['grid', 'list'].includes(data)) return data as CatalogParamsViewType
        return 'grid'
    }

    const getParamCategory = (): CatalogParamsFiltersType['category'] => {
        const data = searchParams.getAll(KEYS.category)

        if (!data) return []
        return data.map((item) => Number(item))
    }

    const getParamPrice = (): CatalogParamsFiltersType['price'] => {
        const data = searchParams.getAll(KEYS.price)
        if (!data) return []
        return data
    }

    const getParamColor = (): CatalogParamsFiltersType['color'] => {
        const data = searchParams.getAll(KEYS.color)
        if (!data) return []
        return data
    }
    const getParamName = (): CatalogParamsFiltersType['name'] => {
        const data = searchParams.get(KEYS.name) ?? ''
        return data
    }

    const getParamBrand = (): CatalogParamsFiltersType['brand'] => {
        const data = searchParams.getAll(KEYS.brand)
        if (!data) return []
        return data.map((item) => Number(item))
    }

    const getParamPage = (): number => {
        const data = Number(searchParams.get('page'))
        if (Number.isInteger(data) && data > 0) return data
        return 1
    }

    const setURLParams = (params: CatalogStateType['potential']) => {
        const urlParams = createSearchParams(params)
        setSearchParams(urlParams)
    }

    const getURLParams = () => {
        if (locationRef.current === location.search && cacheRef.current) return cacheRef.current

        const params: CatalogStateType['potential'] = {
            sort: getParamSort(),
            show: getParamShow(),
            view: getParamView(),
            category: getParamCategory(),
            price: getParamPrice(),
            color: getParamColor(),
            name: getParamName(),
            brand: getParamBrand(),
            page: getParamPage(),
        }

        locationRef.current = location.search
        cacheRef.current = params

        return params
    }

    return { setURLParams, getURLParams }
}

export default useCatalogURLParams
