import Icon from 'components/parts/Icon'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './BackButton.module.less'

export const PageCatalogBackButton: React.FC = () => {
    const navigate = useNavigate()

    const clickHandler = () => {
        navigate(-1)
    }

    return (
        <div className={styles.backbutton} onClick={() => clickHandler()}>
            <span className={styles.arrow}>
                <Icon name='arrowleft' />
            </span>
            Back
        </div>
    )
}
