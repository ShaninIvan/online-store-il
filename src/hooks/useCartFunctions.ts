import { useCallback } from 'react'
import cartAddToOrders from 'services/Cart/cartAddToOrders'
import cartRemoveFromOrders from 'services/Cart/cartRemoveFromOrders'
import getCartUpdateParams from 'services/Cart/getCartUpdateParams'
import { cartRequest } from 'store/slices/cartSlice'
import { ProductType } from 'types/ProductType'
import useAppDispatch from './useAppDispatch'
import useAppSelector from './useAppSelector'

const useCartFunctions = () => {
    const dispatch = useAppDispatch()
    const { jwt, user } = useAppSelector((state) => state.user)
    const { orders } = useAppSelector((state) => state.cart)

    const addToCart = useCallback(
        (product: ProductType, count: number) => {
            if (!jwt) return

            const updatedOrders = cartAddToOrders(orders, product, count)
            const params = getCartUpdateParams(jwt, user.cart, updatedOrders)

            dispatch(cartRequest(params))
        },
        [dispatch, jwt, orders, user]
    )

    const removeFromCart = useCallback(
        (product: ProductType) => {
            if (!jwt) return

            const updatedOrders = cartRemoveFromOrders(orders, product.id)
            const params = getCartUpdateParams(jwt, user.cart, updatedOrders)

            dispatch(cartRequest(params))
        },
        [dispatch, jwt, orders, user]
    )

    return { addToCart, removeFromCart }
}

export default useCartFunctions
