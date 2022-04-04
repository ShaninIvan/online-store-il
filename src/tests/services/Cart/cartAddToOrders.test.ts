import cartAddToOrders from 'services/Cart/cartAddToOrders'
import testCartData from './testCartData'

const { orders, product1, product2 } = testCartData

describe('функция cartAddToOrders', () => {
    test('Добвление уже добавленного продукта повышает его count', () => {
        expect(cartAddToOrders(orders, product1, 2)[0]).toHaveProperty('count', 3)
    })
    test('Отсутствующий продукт добавляется как отдельный элемент', () => {
        expect(cartAddToOrders(orders, product2, 1)).toHaveLength(2)
    })
    test('Count не может стать меньше 1', () => {
        expect(cartAddToOrders(orders, product1, -100)[0].count).toBeGreaterThanOrEqual(1)
    })
    test('Count нового продукта не может быть меньше 1', () => {
        expect(cartAddToOrders(orders, product2, -100)[1].count).toBeGreaterThanOrEqual(1)
    })
})
