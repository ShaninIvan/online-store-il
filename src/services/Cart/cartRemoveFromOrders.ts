import { CartOrderType } from 'types/UserType'

const cartRemoveFromOrders = (orders: CartOrderType[], productId: number) => {
    return [...orders].filter((order) => order.product.id !== productId)
}

export default cartRemoveFromOrders
