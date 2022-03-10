import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './PageProduct.module.less'

export const PageProduct: React.FC = () => {
    const { id } = useParams()

    return <div className={styles.pageproduct}>Product Page: {id}</div>
}
