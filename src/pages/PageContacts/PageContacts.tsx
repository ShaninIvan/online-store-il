import Page from 'components/panels/Page'
import React from 'react'
import styles from './PageContacts.module.less'

export const PageContacts: React.FC = () => {
    return (
        <Page>
            <div className={styles.pagecontacts}>Contacts Page</div>
        </Page>
    )
}
