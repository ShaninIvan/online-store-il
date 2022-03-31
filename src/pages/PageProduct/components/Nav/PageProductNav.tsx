import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.less'

export const PageProductNav: React.FC = () => {
    return (
        <div className={styles.nav}>
            <NavLink
                to=''
                end
                className={({ isActive }) => (isActive ? styles.active : styles.item)}
            >
                About
            </NavLink>

            <NavLink
                to='details'
                className={({ isActive }) => (isActive ? styles.active : styles.item)}
            >
                Details
            </NavLink>

            <NavLink
                to='specs'
                className={({ isActive }) => (isActive ? styles.active : styles.item)}
            >
                Specs
            </NavLink>
        </div>
    )
}
