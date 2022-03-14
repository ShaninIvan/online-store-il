import React from 'react'
import styles from './FooterBottom.module.less'
import PaymentsImg from 'assets/payments.png'
import useSettings from 'hooks/useSettings'
import Icon from 'components/parts/Icon'

export const FooterBottom: React.FC = () => {
    const { contacts } = useSettings()

    return (
        <div className={styles.footerbottom}>
            <hr />
            <div className={styles.links}>
                <a href={contacts.facebook} target='_blank' rel='noreferrer'>
                    <Icon name='facebook' />
                </a>
                <a href={contacts.instagram} target='_blank' rel='noreferrer'>
                    <Icon name='instagram' />
                </a>
            </div>
            <div className={styles.payments}>
                <img src={PaymentsImg} alt='payments methods' />
            </div>
            <div className={styles.copyright}>Copyright © 2020 Shop Pty. Ltd.</div>
        </div>
    )
}
