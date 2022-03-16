import Button from 'components/buttons/Button'
import Availability from 'components/parts/Availability'
import Circle from 'components/parts/Circle'
import Icon from 'components/parts/Icon'
import Rating from 'components/parts/Rating'
import React from 'react'
import { ProductType } from 'types/ProductType'
import styles from './SmallCard.module.less'

type PropsType = {
    product: ProductType
    discount?: number
    onCardClick: (id: number) => any
}

export const SmallCard: React.FC<PropsType> = ({ product, discount = 0, onCardClick }) => {
    const rating = [
        product.rating.one,
        product.rating.two,
        product.rating.three,
        product.rating.four,
        product.rating.five,
    ].filter((star) => star > 0)

    const stars =
        rating.length > 0 ? rating.reduce((acc, current) => acc + current) / rating.length : 0

    const croppedDescription =
        product.description.length > 55
            ? `${product.description.substring(0, 55)}...`
            : product.description

    const oldPrice = (product.price + product.price * (discount / 100)).toFixed(2)
    const newPrice = product.price.toFixed(2)

    return (
        <div className={styles.smallcard} onClick={() => onCardClick(product.id)}>
            <div className={styles.availability}>
                <Availability count={product.inStock} />
            </div>
            <img height={120} src={product.image[0].imageUrl} alt={product.image[0].imageAlt} />
            <div className={styles.circles}>
                <Circle type='heart' callback={() => {}} />
                <Circle type='stats' callback={() => {}} />
            </div>
            <div className={styles.stats}>
                <Rating stars={stars} />
                <div className={styles.reviews}>Reviews ({product.rating.reviews})</div>
            </div>
            <div className={styles.name}>{croppedDescription}</div>
            <div className={styles.price}>
                <div className={styles.price__old}>${oldPrice}</div>
                <div className={styles.price__new}>${newPrice}</div>
            </div>
            <div className={styles.cart}>
                <Button preset='tranparent-blue'>
                    <Icon name='cart' />
                    &nbsp; Add To Cart
                </Button>
            </div>
        </div>
    )
}
