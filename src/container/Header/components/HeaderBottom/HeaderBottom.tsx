import Navbar from 'components/menus/Navbar'
import Icon from 'components/parts/Icon'
import ScreenChecker from 'components/utils/ScreenChecker'
import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderBottom.module.less'

export const HeaderBottom: React.FC = () => {
    return (
        <div className={styles.headerbottom}>
            <div className={styles.left}>
                <Link to={getPath(Paths.home)}>
                    <Icon name='logo' color='#0156FF' size={36} />
                </Link>
            </div>
            <div className={styles.medium}>
                <ScreenChecker desktop>
                    <Navbar />
                </ScreenChecker>
            </div>
            <div className={styles.right}>
                <div className={styles.right__find}>
                    <Icon name='find' />
                </div>
                <div className={styles.right__cart}>
                    <Icon name='cart' />
                </div>
                <div className={styles.right__account}>
                    <Icon name='profile' />
                </div>
            </div>
        </div>
    )
}
