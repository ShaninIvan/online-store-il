import ImageSlider from 'components/panels/ImageSlider'
import React from 'react'
import styles from './PageHome.module.less'

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
    return (
        <div className={styles.pagehome}>
            <div className={styles.banners}>
                <ImageSlider images={banners} />
                <h2>New Products</h2>
            </div>
        </div>
    )
}
