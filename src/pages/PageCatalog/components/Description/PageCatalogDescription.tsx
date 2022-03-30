import Button from 'components/buttons/Button'
import React, { useState } from 'react'
import styles from './Description.module.less'

type PropsType = {
    children: React.ReactNode
}

export const PageCatalogDescription: React.FC<PropsType> = ({ children }) => {
    const [opened, setOpened] = useState<boolean>(false)

    return (
        <div className={styles.description}>
            <div className={`${styles.text} ${opened && styles.opened}`}>{children}</div>
            <Button preset='transparent-gray' onClick={() => setOpened(!opened)}>
                {opened ? 'Less' : 'More'}
            </Button>
        </div>
    )
}
