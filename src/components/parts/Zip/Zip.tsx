import getPath from 'core/routing/getPath'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Zip.module.less'
import ZipImg from 'assets/zip.png'

export const Zip: React.FC = () => {
    return (
        <div className={styles.zip}>
            <img src={ZipImg} alt='zip' /> <span className={styles.vl}></span>
            <div>
                <b>own</b>&nbsp; it now, up to 6 months interest free&nbsp;
                <Link to={getPath('/terms')}>learn more</Link>
            </div>
        </div>
    )
}
