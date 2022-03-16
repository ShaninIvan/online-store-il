import Button from 'components/buttons/Button'
import React, { useState } from 'react'
import styles from './Reviews.module.less'

type PropsType = {
    reviews: {
        author: string
        text: string
    }[]
}

export const PageHomeReviews: React.FC<PropsType> = ({ reviews }) => {
    const [active, setActive] = useState<number>(0)

    const text = reviews[active].text
    const author = reviews[active].author

    return (
        <div className={styles.reviews}>
            <div className={styles.quotes}>‘’</div>
            <div className={styles.text}>{text}</div>
            <div className={styles.author}>– {author}</div>
            <div className={styles.button}>
                <Button preset='tranparent-blue'>Leave Us A Review</Button>
            </div>
            <div className={styles.radio}>
                {reviews.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.radio__item} ${index === active && styles.active}`}
                        onClick={() => setActive(index)}
                    ></div>
                ))}
            </div>
        </div>
    )
}
