import { ProductType } from 'types/ProductType'
import { CartOrderType } from 'types/UserType'

const cartAddToOrders = (orders: CartOrderType[], product: ProductType, count: number) => {
    const updatedOrders = [...orders]

    const index = updatedOrders.findIndex((order) => order.product.id === product.id)

    if (index >= 0) {
        const newOrder: CartOrderType = {
            product: {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
            },
            count: updatedOrders[index].count + count,
        }

        updatedOrders[index] = newOrder
    } else {
        const newOrder: CartOrderType = {
            product: {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
            },
            count: Math.max(count, 1),
        }
        updatedOrders.push(newOrder)
    }

    return updatedOrders
}

export default cartAddToOrders
