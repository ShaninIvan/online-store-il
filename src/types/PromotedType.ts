import { CategoryType } from './CategoryType'

export type PromotedType = {
    id: number
    categories: CategoryType[]
}

export type PromotedStateType = {
    promo: PromotedType
    isLoading: boolean
    error: string | null
}
