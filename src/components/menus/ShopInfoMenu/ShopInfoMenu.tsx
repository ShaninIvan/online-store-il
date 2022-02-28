import Icon from 'components/parts/Icon'
import { CONTACTS_DETAILS } from 'config/contacts'
import React from 'react'
import styles from './ShopInfoMenu.module.less'

export const ShopInfoMenu: React.FC = () => {
    return (
        <div className={styles.shopinfomenu}>
            <div className={styles.worktime}>
                <div className={styles.icon}>
                    <Icon name='clock-c' size={24} />
                </div>

                <div>
                    <div className={styles.small}>We are open:</div>
                    <div>
                        <span className={styles.gray}>Mon-Thu:</span> 9:00 AM -
                        5:30 PM
                    </div>
                    <div>
                        <span className={styles.gray}>Fr:</span> 9:00 AM - 6:00
                        PM
                    </div>
                    <div>
                        <span className={styles.gray}>Sat:</span> 11:00 AM -
                        5:00 PM
                    </div>
                </div>
            </div>

            <hr />

            <div className={styles.address}>
                <div className={styles.icon}>
                    <Icon name='address' size={24} />
                </div>
                <div>Address: {CONTACTS_DETAILS.Address}</div>
            </div>

            <hr />

            <div className={styles.other}>
                <div>
                    Phones:&nbsp;
                    <span className={styles.blue}>
                        {CONTACTS_DETAILS.Phones}
                    </span>
                </div>
                <div>
                    Email:&nbsp;
                    <span className={styles.blue}>
                        {CONTACTS_DETAILS.Email}
                    </span>
                </div>
            </div>
        </div>
    )
}
