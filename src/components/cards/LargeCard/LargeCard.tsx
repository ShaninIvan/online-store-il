import Button from 'components/buttons/Button'
import Availability from 'components/parts/Availability'
import Icon from 'components/parts/Icon'
import Rating from 'components/parts/Rating'
import Specs from 'components/parts/Specs'
import useCartFunctions from 'hooks/useCartFunctions'
import React from 'react'
import getCardStars from 'services/Cards/getCardStars'
import { ProductType } from 'types/ProductType'
import styles from './LargeCard.module.less'

type PropsType = {
    product: ProductType
    discount?: number
    onCardClick: (id: number) => void
}

export const LargeCard: React.FC<PropsType> = ({ product, discount = 0, onCardClick }) => {
    const { addToCart } = useCartFunctions()

    const stars = getCardStars(product.rating)

    const oldPrice = (product.price + product.price * (discount / 100)).toFixed(2)
    const newPrice = product.price.toFixed(2)

    const addToCartClickHandler = (event: React.MouseEvent) => {
        event.stopPropagation()
        addToCart(product, 1)
    }

    return (
        <div className={styles.largecard} onClick={() => onCardClick(product.id)}>
            <div className={styles.left}>
                <div className={styles.image}>
                    <img src={product.image[0].imageUrl} alt={product.image[0].imageAlt} />
                </div>
                <div className={styles.stats}>
                    <Rating stars={stars} />
                    <div className={styles.reviews}>Reviews ({product.rating.reviews})</div>
                </div>
            </div>

            <div className={styles.leftmedium}>
                <div className={styles.code}>{product.code}</div>
                <div className={styles.name}>{product.description}</div>
                <div className={styles.price}>
                    <div className={styles.price__old}>${oldPrice}</div>
                    <div className={styles.price__new}>${newPrice}</div>
                </div>
                <Button preset='tranparent-blue' onClick={(event) => addToCartClickHandler(event)}>
                    <Icon name='cart' />
                    &nbsp; Add To Cart
                </Button>
            </div>

            <div className={styles.rightmedium}>
                <Specs data={product.specs} />
            </div>

            <div className={styles.right}>
                <Availability count={product.inStock} />
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
            </div>
        </div>
    )
}
