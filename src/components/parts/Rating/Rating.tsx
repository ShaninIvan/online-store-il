import React from 'react'
import Icon from '../Icon'
import styles from './Rating.module.less'

type PropsType = {
    stars: number
}

export const Rating: React.FC<PropsType> = ({ stars }) => {
    const color = {
        one: stars > 0 ? '#E9A426' : '#C4C4C4',
        two: stars > 1 ? '#E9A426' : '#C4C4C4',
        three: stars > 2 ? '#E9A426' : '#C4C4C4',
        four: stars > 3 ? '#E9A426' : '#C4C4C4',
        five: stars > 4 ? '#E9A426' : '#C4C4C4',
    }

    return (
        <div className={styles.rating}>
            <Icon name='star' color={color.one} />
            <Icon name='star' color={color.two} />
            <Icon name='star' color={color.three} />
            <Icon name='star' color={color.four} />
            <Icon name='star' color={color.five} />
        </div>
    )
}
