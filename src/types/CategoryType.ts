import IAPIState from './IAPIState'

export type CategoryType = {
    id: number
    name: string
    image: []
    parent: {
        id: number
        name: string
    } | null
    subcategories: {
        id: number
        name: string
    }[]
}

export interface CategoryStateType extends IAPIState {
    categories: CategoryType[]
}
