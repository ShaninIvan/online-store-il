import ScreenChecker from 'components/utils/ScreenChecker'
import { CONTACTS_DETAILS } from 'config/contacts'
import { Paths } from 'config/routes'
import RouteManager from 'core/routing/RouteManager'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderTop.module.less'

export const HeaderTop: React.FC = () => {
    return (
        <div className={styles.headertop}>
            <div className={styles.worktime}>
                <span className={styles.worktime__days}>Mon-Thu:</span>
                &nbsp; 9:00 AM - 5:30 PM
            </div>
            <div className={styles.address}>
                <ScreenChecker desktop>
                    <span className={styles.address__visit}>
                        Visit our showroom in {CONTACTS_DETAILS.Address}
                    </span>
                    &nbsp;
                </ScreenChecker>
                <span className={styles.address__contact}>
                    <Link to={RouteManager.getPath(Paths.contacts)}>
                        Contact Us
                    </Link>
                </span>
            </div>
            <ScreenChecker desktop>
                <div className={styles.contacts}>
                    Call Us: {CONTACTS_DETAILS.Phones}
                    <a
                        href={CONTACTS_DETAILS.Facebook}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='icon-facebook' />
                    </a>
                    <a
                        href={CONTACTS_DETAILS.Instagram}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <span className='icon-instagram' />
                    </a>
                </div>
            </ScreenChecker>
        </div>
    )
}
