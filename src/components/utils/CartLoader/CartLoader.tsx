import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'
import React, { useEffect } from 'react'
import { cartRequestGet } from 'store/slices/cartSlice'

export const CartLoader: React.FC = () => {
    const dispatch = useAppDispatch()
    const { jwt } = useAppSelector((state) => state.user)

    useEffect(() => {
        if (jwt) {
            dispatch(cartRequestGet())
        }
    }, [jwt, dispatch])

    return null
}
