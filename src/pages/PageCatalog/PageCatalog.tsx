import Page from 'components/panels/Page'
import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './PageCatalog.module.less'

export const PageCatalog: React.FC = () => {
    const { id } = useParams()

    return (
        <Page>
            <div className={styles.pagecatalog}>Catalog page: {id}</div>
        </Page>
    )
}
