import IAPIState from './IAPIState'

export type CategoryType = {
    id: number
    attributes: {
        name: string
        image: []
        parent: {
            data: { id: number; attributes: { name: string } } | null
        }
        subCategories: { data: { id: number; attributes: { name: string } } }[]
    }
}

export type CategoryResponseType = {
    data: CategoryType[]
    meta: {}
}

export interface CategoryStateType extends IAPIState {
    categories: CategoryType[]
}
