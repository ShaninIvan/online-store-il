import { RouteList } from 'core/routing/RouteList'
import React from 'react'
import styles from './Main.module.less'

export const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            <RouteList />
        </main>
    )
}
