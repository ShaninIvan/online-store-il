import Button from 'components/buttons/Button'
import React from 'react'
import HeaderTop from './components/HeaderTop'
import styles from './Header.module.less'

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <HeaderTop />
            <Button preset='blue-white'>Test</Button>
        </header>
    )
}
