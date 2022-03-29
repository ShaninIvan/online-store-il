import React from 'react'
import styles from './Wish.module.less'

export const PageCatalogWish: React.FC = () => {
    return (
        <div className={styles.wish}>
            <h4>My Wish List</h4>
            You have no items in your wish list.
        </div>
    )
}
