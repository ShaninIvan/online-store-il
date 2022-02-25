import ROUTES_CONFIG from 'config/routes'
import React from 'react'
import { useRoutes } from 'react-router-dom'
import styles from './Main.module.less'

export const Main: React.FC = () => {
    const routesList = useRoutes(ROUTES_CONFIG)

    return <main className={styles.main}>{routesList}</main>
}
