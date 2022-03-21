import ShopInfoMenu from 'components/menus/ShopInfoMenu'
import Popup from 'components/panels/Popup'
import Icon from 'components/parts/Icon'
import ScreenChecker from 'components/utils/ScreenChecker'
import { HeaderSearchFocusContext } from 'container/Header/Header'
import getPath from 'core/routing/getPath'
import useSettings from 'hooks/useSettings'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderTop.module.less'

export const HeaderTop: React.FC = () => {
    const { contacts } = useSettings()

    const { searchFocus } = useContext(HeaderSearchFocusContext)

    return (
        <div className={`${styles.headertop} ${searchFocus && styles.searchfocus}`}>
            <div className={styles.worktime}>
                <span className={styles.worktime__days}>Mon-Thu:</span>
                &nbsp; 9:00 AM - 5:30 PM
                <Popup toggle={<Icon name='arrowdown' size={10} />}>
                    <ShopInfoMenu />
                </Popup>
            </div>
            <div className={styles.address}>
                <ScreenChecker desktop>
                    <span className={styles.address__visit}>
                        Visit our showroom in {contacts.address}
                    </span>
                    &nbsp;
                </ScreenChecker>
                <span className={styles.address__contact}>
                    <Link to={getPath('/contacts')}>Contact Us</Link>
                </span>
            </div>

            <div className={styles.contacts}>
                Call Us: {contacts.phone}
                <ScreenChecker desktop>
                    <a href={contacts.facebook} target='_blank' rel='noreferrer'>
                        <Icon name='facebook' />
                    </a>
                    <a href={contacts.instagram} target='_blank' rel='noreferrer'>
                        <Icon name='instagram' />
                    </a>
                </ScreenChecker>
            </div>
        </div>
    )
}
