import IAPIState from './IAPIState'
import { ProductType } from './ProductType'

type CartOrderType = {
    id: ProductType['id']
    count: number
}

export interface CartStateType extends IAPIState {
    orders: CartOrderType[]
}
