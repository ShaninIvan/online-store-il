import Page from 'components/panels/Page'
import React from 'react'
import styles from './PageCart.module.less'

export const PageCart: React.FC = () => {
    return (
        <Page>
            <div className={styles.pagecart}></div>
        </Page>
    )
}
