import { CartOrderType } from 'types/UserType'

const cartUpdateOrderCount = (orders: CartOrderType[], id: number, count: number) => {
    const updatedOrders = [...orders]

    const index = updatedOrders.findIndex((order) => order.product.id === id)

    if (index === -1) return updatedOrders

    updatedOrders[index] = { ...updatedOrders[index], count: count }

    return updatedOrders
}

export default cartUpdateOrderCount
