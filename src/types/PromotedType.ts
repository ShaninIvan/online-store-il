import { CategoryType } from './CategoryType'
import IAPIState from './IAPIState'

export type PromotedType = {
    id: number
    categories: CategoryType[]
}

export interface PromotedStateType extends IAPIState {
    promo: PromotedType
}
