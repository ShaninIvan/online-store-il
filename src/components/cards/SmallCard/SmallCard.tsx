import Button from 'components/buttons/Button'
import Availability from 'components/parts/Availability'
import Circle from 'components/parts/Circle'
import Icon from 'components/parts/Icon'
import Rating from 'components/parts/Rating'
import useCartFunctions from 'hooks/useCartFunctions'
import React from 'react'
import getCardcroppedDesc from 'services/Cards/getCardcroppedDesc'
import getCardStars from 'services/Cards/getCardStars'
import { ProductType } from 'types/ProductType'
import styles from './SmallCard.module.less'

type PropsType = {
    product: ProductType
    discount?: number
    onCardClick: (id: number) => void
    mobile?: boolean
}

export const SmallCard: React.FC<PropsType> = ({
    product,
    discount = 0,
    onCardClick,
    mobile = false,
}) => {
    const { addToCart } = useCartFunctions()

    const stars = getCardStars(product.rating)

    const croppedDescription = getCardcroppedDesc(product.description)

    const oldPrice = (product.price + product.price * (discount / 100)).toFixed(2)
    const newPrice = product.price.toFixed(2)

    const addToCartClickHandler = (event: React.MouseEvent) => {
        event.stopPropagation()
        addToCart(product, 1)
    }

    return (
        <div
            className={`${styles.smallcard} ${mobile && styles.mobile}`}
            onClick={() => onCardClick(product.id)}
        >
            <div className={styles.availability}>
                <Availability count={product.inStock} />
            </div>
            <img src={product.image[0].imageUrl} alt={product.image[0].imageAlt} />
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
                <Button preset='tranparent-blue' onClick={(event) => addToCartClickHandler(event)}>
                    <Icon name='cart' />
                    &nbsp; Add To Cart
                </Button>
            </div>
        </div>
    )
}
