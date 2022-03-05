import React from 'react'
import styles from './Loader.module.less'

type PropsType = {
    isLoading: boolean
}

export const Loader: React.FC<PropsType> = ({ isLoading }) => {
    if (isLoading)
        return (
            <div className={styles.loader}>
                <div className={styles.circle}></div>
            </div>
        )

    return <></>
}
