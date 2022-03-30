import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import styles from './Breadcrumbs.module.less'

type PropsType = {
    crumbs: {
        name: string
        path: string
    }[]
}

export const Breadcrumbs: React.FC<PropsType> = ({ crumbs }) => {
    if (crumbs.length === 0) return null
    const lastCrumb = crumbs[crumbs.length - 1]

    return (
        <div className={styles.routeline}>
            {crumbs.map((crumb, index) => {
                if (crumb === lastCrumb) {
                    return (
                        <span key={index} className={styles.last}>
                            {crumb.name}
                        </span>
                    )
                } else {
                    return (
                        <span key={index} className={styles.link}>
                            <Link to={crumb.path}>{crumb.name}</Link>
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
