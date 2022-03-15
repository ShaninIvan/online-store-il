import Facilities from 'components/parts/Facilities'
import { Paths } from 'config/routes'
import React from 'react'
import { useMatch } from 'react-router-dom'
import FooterBottom from './components/FooterBottom'
import FooterMedium from './components/FooterMedium'
import FooterTop from './components/FooterTop'
import styles from './Footer.module.less'

export const Footer: React.FC = () => {
    const isHomePage = useMatch(Paths.home)

    return (
        <footer className={styles.footer}>
            <Facilities background={isHomePage ? 'white' : 'ghostly'} />
            <FooterTop />
            <FooterMedium />
            <FooterBottom />
        </footer>
    )
}
