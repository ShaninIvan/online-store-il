import React from 'react'
import styles from './Help.module.less'

export const PageProductHelp: React.FC = () => {
    return (
        <div className={styles.help}>
            <div className={styles.options}>
                <div className={styles.option}>
                    <div className={styles.name}>Product Support</div>
                    <div className={styles.arrow}>→</div>
                </div>
                <div className={styles.option}>
                    <div className={styles.name}>FAQ</div>
                    <div className={styles.arrow}>→</div>
                </div>
                <div className={styles.option}>
                    <div className={styles.name}>Our Buyer Guide</div>
                    <div className={styles.arrow}>→</div>
                </div>
            </div>
        </div>
    )
}
