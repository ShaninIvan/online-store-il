import Icon from 'components/parts/Icon'
import useSettings from 'hooks/useSettings'
import React from 'react'
import styles from './ShopInfoMenu.module.less'

export const ShopInfoMenu: React.FC = () => {
    const { contacts } = useSettings()

    return (
        <div className={styles.shopinfomenu}>
            <div className={styles.worktime}>
                <div className={styles.icon}>
                    <Icon name='clock-c' size={24} />
                </div>

                <div>
                    <div className={styles.small}>We are open:</div>
                    <div>
                        <span className={styles.gray}>Mon-Thu:</span> 9:00 AM - 5:30 PM
                    </div>
                    <div>
                        <span className={styles.gray}>Fr:</span> 9:00 AM - 6:00 PM
                    </div>
                    <div>
                        <span className={styles.gray}>Sat:</span> 11:00 AM - 5:00 PM
                    </div>
                </div>
            </div>

            <hr />

            <div className={styles.address}>
                <div className={styles.icon}>
                    <Icon name='address' size={24} />
                </div>
                <div>Address: {contacts.address}</div>
            </div>

            <hr />

            <div className={styles.other}>
                <div>
                    Phones:&nbsp;
                    <span className={styles.blue}>{contacts.phone}</span>
                </div>
                <div>
                    Email:&nbsp;
                    <span className={styles.blue}>{contacts.email}</span>
                </div>
            </div>
        </div>
    )
}
