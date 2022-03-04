import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import React, { useEffect } from 'react'
import { fetchSettings } from 'store/slices/settingsSlice'
import styles from './APILoader.module.less'

export const APILoader: React.FC = () => {
    const dispatch = useAppDispatch()
    const settings = useAppSelector((state) => state.settings)

    const isLoading = [settings.isLoading]

    useEffect(() => {
        dispatch(fetchSettings())
    }, [dispatch])

    if (isLoading.includes(true))
        return (
            <div className={styles.apiloader}>
                <div className={styles.circle}></div>
            </div>
        )

    return <></>
}
