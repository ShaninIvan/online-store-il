import IAPIState from './IAPIState'
import { ProductType } from './ProductType'

export interface UserStateType extends IAPIState {
    jwt: string | null
    user: {
        username: string
        email: string
        avatar: string
        cart: number
    }
}

export interface CartStateType extends IAPIState {
    orders: CartOrderType[]
    shipping: number
    gst: number
    tax: number
}

export type CartOrderType = {
    product: Pick<ProductType, 'id' | 'name' | 'image' | 'price'>
    count: number
}
