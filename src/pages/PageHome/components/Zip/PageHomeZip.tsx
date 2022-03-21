import React from 'react'
import styles from './Zip.module.less'
import ZipImg from 'assets/zip.png'
import { Link } from 'react-router-dom'
import getPath from 'core/routing/getPath'

export const PageHomeZip: React.FC = () => {
    return (
        <div className={styles.zip}>
            <img src={ZipImg} alt='zip' /> <span className={styles.vl}></span>
            <span>
                <b>own</b>&nbsp; it now, up to 6 months interest free&nbsp;
            </span>
            <Link to={getPath('/terms')}>learn more</Link>
        </div>
    )
}
