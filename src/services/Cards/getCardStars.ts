import { ProductType } from 'types/ProductType'

const getCardStars = (rating: ProductType['rating']) => {
    const starsArray = [rating.one, rating.two, rating.three, rating.four, rating.five]

    const count = starsArray.reduce((acc, current) => acc + current)
    if (count === 0) return 0

    const values = [
        rating.one * 1,
        rating.two * 2,
        rating.three * 3,
        rating.four * 4,
        rating.five * 5,
    ]

    const stars = values.reduce((acc, current) => acc + current) / count

    return Math.round(stars)
}

export default getCardStars
