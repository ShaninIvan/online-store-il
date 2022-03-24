import { createSearchParams, useSearchParams } from 'react-router-dom'
import {
    CatalogParamsShowType,
    CatalogParamsSortType,
    CatalogParamsViewType,
} from 'types/CatalogType'

enum KEYS {
    sort = 'sort',
    show = 'show',
    view = 'view',
    category = 'category',
}

const useCatalogParams = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const updateParams = (key: KEYS, value: any) => {
        const params: { [key in KEYS]: any } = {
            sort: sort.get(),
            show: show.get(),
            view: view.get(),
            category: category.get(),
        }

        params[key] = value

        const urlParams = createSearchParams(params)
        setSearchParams(urlParams)
    }

    const sort = {
        get: (): CatalogParamsSortType => {
            const data = searchParams.get(KEYS.sort)

            if (data && ['position', 'name', 'price'].includes(data)) {
                return data as CatalogParamsSortType
            }

            return 'position'
        },
        set: (sort: CatalogParamsSortType) => updateParams(KEYS.sort, sort),
    }

    const show = {
        get: (): CatalogParamsShowType => {
            const data = Number(searchParams.get(KEYS.show))

            if ([5, 15, 25].includes(data)) return data as CatalogParamsShowType
            return 5
        },
        set: (count: number) => updateParams(KEYS.show, count),
    }

    const view = {
        get: (): CatalogParamsViewType => {
            const data = searchParams.get(KEYS.view)

            if (data && ['grid', 'list'].includes(data)) return data as CatalogParamsViewType
            return 'grid'
        },
        set: (mode: CatalogParamsViewType) => updateParams(KEYS.view, mode),
    }

    const category = {
        get: (): number[] => {
            const data = searchParams.get(KEYS.category)
            if (!data) return []
            return []
        },
        set: (ids: number[]) => updateParams(KEYS.category, ids),
    }

    return { sort, show, view }
}

export default useCatalogParams
