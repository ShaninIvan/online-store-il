import React from 'react'
import HeaderBottom from './components/HeaderBottom'
import HeaderTop from './components/HeaderTop'
import styles from './Header.module.less'

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <HeaderTop />
            <HeaderBottom />
        </header>
    )
}
