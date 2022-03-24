import { createSearchParams, useSearchParams } from 'react-router-dom'

enum KEYS {
    sort = 'sort',
    show = 'show',
    view = 'view',
}

const useCatalogFunctions = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const updateParams = (key: KEYS, value: any) => {
        const params: { [key in KEYS]: any } = {
            sort: sort.get(),
            show: show.get(),
            view: view.get(),
        }

        params[key] = value

        const urlParams = createSearchParams(params)
        setSearchParams(urlParams)
    }

    const sort = {
        get: () => {
            const data = searchParams.get('sort')

            if (data && ['position', 'name', 'price'].includes(data)) return data
            return 'position'
        },
        set: (sort: string) => updateParams(KEYS.sort, sort),
    }

    const show = {
        get: () => {
            const data = Number(searchParams.get('show'))

            if ([5, 15, 25].includes(data)) return data
            return 5
        },
        set: (count: number) => updateParams(KEYS.show, count),
    }

    const view = {
        get: (): 'grid' | 'list' => {
            const data = searchParams.get('view')

            if (data && ['grid', 'list'].includes(data)) return data as 'grid' | 'list'
            return 'grid'
        },
        set: (mode: 'grid' | 'list') => updateParams(KEYS.view, mode),
    }

    return { sort, show, view }
}

export default useCatalogFunctions
