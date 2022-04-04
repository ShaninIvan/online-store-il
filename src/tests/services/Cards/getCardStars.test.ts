import getCardStars from 'services/Cards/getCardStars'

const ratingForNull = {
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    reviews: 0,
}

const ratingForOne = {
    one: 11,
    two: 1,
    three: 0,
    four: 0,
    five: 0,
    reviews: 12,
}

const ratingForFour = {
    one: 1,
    two: 0,
    three: 3,
    four: 0,
    five: 5,
    reviews: 9,
}

const ratingForFive = {
    one: 0,
    two: 0,
    three: 0,
    four: 1,
    five: 5,
    reviews: 6,
}

describe('функция getCardStars', () => {
    test('Рейтинг с ожиданием 0', () => {
        expect(getCardStars(ratingForNull)).toBe(0)
    })
    test('Рейтинг с ожиданием 1', () => {
        expect(getCardStars(ratingForOne)).toBe(1)
    })
    test('Рейтинг с ожиданием 4', () => {
        expect(getCardStars(ratingForFour)).toBe(4)
    })
    test('Рейтинг с ожиданием 5', () => {
        expect(getCardStars(ratingForFive)).toBe(5)
    })
})
