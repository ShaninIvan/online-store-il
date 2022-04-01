import Icon from 'components/parts/Icon'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from 'types/ProductType'
import styles from './Images.module.less'
import ZipImg from 'assets/zip.png'
import getPath from 'core/routing/getPath'

type PropsType = {
    product: ProductType
}

export const PageProductImages: React.FC<PropsType> = ({ product }) => {
    const [imgIndex, setImgIndex] = useState<number>(0)

    return (
        <div className={styles.images}>
            <div className={styles.controls}>
                <div className={styles.circle}>
                    <Icon name='email' />
                </div>
                <div className={styles.circle}>
                    <Icon name='heart' />
                </div>
                <div className={styles.circle}>
                    <Icon name='stats' />
                </div>
            </div>

            <div className={styles.image}>
                <img
                    src={product.image[imgIndex].imageUrl}
                    alt={product.image[imgIndex].imageAlt}
                />
            </div>

            <div className={styles.zip}>
                <img src={ZipImg} alt='zip' /> <span className={styles.vl}></span>
                <div>
                    <b>own</b>&nbsp; it now, up to 6 months interest free&nbsp;
                    <Link to={getPath('/terms')}>learn more</Link>
                </div>
            </div>

            <div className={styles.switch}>
                {product.image.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.switch__item} ${index === imgIndex && styles.active}`}
                        onClick={() => setImgIndex(index)}
                    ></div>
                ))}
            </div>
        </div>
    )
}
