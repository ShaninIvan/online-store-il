import { AsyncThunkAction } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import useAppDispatch from './useAppDispatch'
import useAppSelector from './useAppSelector'

type AT = () => AsyncThunkAction<any, void, {}>

const useAPILoader = (asyncThunks: AT[]): boolean => {
    const dispatch = useAppDispatch()
    const selector = useAppSelector((state) => state)

    useEffect(() => {
        asyncThunks.forEach((thunk) => dispatch(thunk()))
    }, [asyncThunks, dispatch])

    const isLoading: boolean[] = Object.values(selector).map((state) => state.isLoading)

    return isLoading.includes(true)
}

export default useAPILoader
