import { useRef } from 'react'
import { useAppDispatch } from './useAppDispatch'

export const useLocalStorage = <T>(
    state: T,
    setState: (state: T) => any,
    key: string,
    initial: T,
    redux: boolean = false
) => {
    const dispatch = useAppDispatch()
    const isLoaded = useRef(false)

    if (JSON.stringify(state) === JSON.stringify(initial)) {
        try {
            if (isLoaded.current) return

            const cache = localStorage.getItem(key)

            if (cache === null) return

            redux ? dispatch(setState(JSON.parse(cache))) : setState(JSON.parse(cache))

            isLoaded.current = true
        } catch (error) {
            return
        }
    } else {
        localStorage.setItem(key, JSON.stringify(state))
    }
}
