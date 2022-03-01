import { PAYMENTS } from 'config/payments'
import { ROLES } from 'config/roles'
import { ProductType } from './ProductType'

export type UserInfoType = {
    role: ROLES
    name: string | null
    avatar: string | null
}

export type UserAccountInfoType = {
    contacts: string | null
    newsletters: []
}

export type UserAddressBookType = {
    billing: string | null
    shipping: string | null
}

export type UserPaymentMethodType = {
    method: PAYMENTS
}

export type UserOrdersType = {
    id: ProductType['id']
    count: number
    date: string
}

export type CartOrderType = {
    id: ProductType['id']
    count: number
}

export type UserWishType = {
    id: ProductType['id']
}

export type UserCompareType = {
    id: ProductType['id']
}

export type UserReviewType = {
    id: ProductType['id']
    review: string
    rating: 1 | 2 | 3 | 4 | 5
}
