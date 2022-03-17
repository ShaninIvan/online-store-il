import React from 'react'
import styles from './News.module.less'

type PropsType = {
    news: {
        image: string
        content: string
        date: string
    }[]
}

export const PageHomeNews: React.FC<PropsType> = ({ news }) => {
    return (
        <div className={styles.news}>
            <h2>Follow us on Instagram for News, Offers & More</h2>
            <div className={styles.items}>
                {news.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <img src={item.image} alt='news item' />
                        <div className={styles.content}>{item.content}</div>
                        <div className={styles.date}>{item.date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
