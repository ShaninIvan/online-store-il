import { useCallback } from 'react'
import cartAddToOrders from 'services/Cart/cartAddToOrders'
import cartRemoveFromOrders from 'services/Cart/cartRemoveFromOrders'
import cartUpdateOrderCount from 'services/Cart/cartUpdateOrderCount'
import { cartRequestPut } from 'store/slices/cartSlice'
import { ProductType } from 'types/ProductType'
import useAppDispatch from './useAppDispatch'
import useAppSelector from './useAppSelector'

const useCartFunctions = () => {
    const dispatch = useAppDispatch()
    const { orders } = useAppSelector((state) => state.cart)

    const addToCart = useCallback(
        (product: ProductType, count: number) => {
            const updatedOrders = cartAddToOrders(orders, product, count)

            dispatch(cartRequestPut(updatedOrders))
        },
        [dispatch, orders]
    )

    const removeFromCart = useCallback(
        (productId: number) => {
            const updatedOrders = cartRemoveFromOrders(orders, productId)

            dispatch(cartRequestPut(updatedOrders))
        },
        [dispatch, orders]
    )

    const changeOrderCount = useCallback(
        (id: number, count: number) => {
            const updatedOrders = cartUpdateOrderCount(orders, id, count)

            dispatch(cartRequestPut(updatedOrders))
        },
        [dispatch, orders]
    )

    const clearCart = useCallback(() => {
        dispatch(cartRequestPut([]))
    }, [dispatch])

    return { addToCart, removeFromCart, changeOrderCount, clearCart }
}

export default useCartFunctions
