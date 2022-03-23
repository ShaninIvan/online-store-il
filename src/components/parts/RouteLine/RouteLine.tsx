import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import styles from './RouteLine.module.less'

type PropsType = {
    routes: {
        name: string
        path: string
    }[]
}

export const RouteLine: React.FC<PropsType> = ({ routes }) => {
    if (routes.length === 0) return null
    const lastRoute = routes[routes.length - 1]

    return (
        <div className={styles.routeline}>
            {routes.map((route, index) => {
                if (route === lastRoute) {
                    return (
                        <span key={index} className={styles.last}>
                            {route.name}
                        </span>
                    )
                } else {
                    return (
                        <span key={index} className={styles.link}>
                            <Link to={route.path}>{route.name}</Link>
                            <span className={styles.arrow}>
                                <Icon name='arrowright' />
                            </span>
                        </span>
                    )
                }
            })}
        </div>
    )
}
