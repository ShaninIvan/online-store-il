import IAPIState from './IAPIState'

export type CategoryType = {
    id: number
    name: string
    image: {
        imageUrl: string
        imageAlt: string
    }[]
    parent: {
        id: number
        name: string
    } | null
    subcategories: {
        id: number
        name: string
    }[]
}

export type PromotedType = {
    id: number
    category: CategoryType
}

export interface CategoryStateType extends IAPIState {
    categories: CategoryType[]
    promoted: CategoryType[]
}
