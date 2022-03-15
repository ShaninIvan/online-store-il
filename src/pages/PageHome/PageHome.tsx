import CardSlider from 'components/panels/CardSlider'
import ImageSlider from 'components/panels/ImageSlider'
import { Paths } from 'config/routes'
import getPath from 'core/routing/getPath'
import useAppSelector from 'hooks/useAppSelector'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PageHome.module.less'
import ZipImg from 'assets/zip.png'

const banners = [
    {
        url: 'https://i.onthe.io/smngoz5vanqtp2d6g.901fc1ac.png',
        alt: 'HP Printers',
    },

    {
        url: 'https://i.onthe.io/smngoz24jc7hg1j32g.5d67851e.jpg',
        alt: 'MSi Monitor',
    },
    {
        url: 'https://i.onthe.io/smngozvunmptbdp08.52973ec0.jpg',
        alt: 'Gigabyte',
    },
]

export const PageHome: React.FC = () => {
    const { products } = useAppSelector((state) => state.products)

    const newProducts = products.slice(-20)

    return (
        <div className={styles.pagehome}>
            <div className={styles.banners}>
                <ImageSlider images={banners} />
            </div>
            <div className={styles.new}>
                <h2>New Products</h2>
                <Link to={getPath(Paths.home)}>See All New Products</Link>
                <div className={styles.new__cards}>
                    <CardSlider products={newProducts} withControls />
                </div>
            </div>
            <div className={styles.zip}>
                <img src={ZipImg} alt='zip' /> <span className={styles.zip__vl}></span>
                <b>own</b>&nbsp; it now, up to 6 months interest free&nbsp;
                <Link to={getPath(Paths.terms)}>learn more</Link>
            </div>
        </div>
    )
}
