import cartRemoveFromOrders from 'services/Cart/cartRemoveFromOrders'
import testCartData from './testCartData'

const { orders } = testCartData

describe('функция cartRemoveFromOrders', () => {
    test('Передача существующего id удаляет заказ', () => {
        expect(cartRemoveFromOrders(orders, 14)).toEqual([])
    })
})
