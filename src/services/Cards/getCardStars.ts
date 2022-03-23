import { ProductType } from 'types/ProductType'

const getCardStars = (rating: ProductType['rating']) => {
    const starsArray = [rating.one, rating.two, rating.three, rating.four, rating.five].filter(
        (star) => star > 0
    )

    const stars =
        starsArray.length > 0
            ? starsArray.reduce((acc, current) => acc + current) / starsArray.length
            : 0

    return stars
}

export default getCardStars
