import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React, { useEffect } from 'react'
import getCartLoadParams from 'services/Cart/getCartLoadParams'
import { cartRequest } from 'store/slices/cartSlice'

export const CartLoader: React.FC = () => {
    const dispatch = useAppDispatch()
    const { jwt, user } = useAppSelector((state) => state.user)

    useEffect(() => {
        if (jwt) {
            const params = getCartLoadParams(jwt, user.cart)
            dispatch(cartRequest(params))
        }
    }, [jwt, user, dispatch])

    return null
}
