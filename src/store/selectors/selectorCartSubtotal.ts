import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

const cartSelector = (state: RootState) => state.cart

export const selectorCartSubtotal = createSelector([cartSelector], (cart) => {
    const subtotal = cart.orders.reduce(
        (acc, current) => acc + current.product.price * current.count,
        0
    )
    return subtotal
})

export const selectorCartTotal = createSelector(
    [cartSelector, selectorCartSubtotal],
    ({ gst, shipping, tax }, subtotal) => {
        const gstResult = subtotal * (gst / 100)
        const total = Math.ceil(subtotal + gstResult + shipping + tax)

        return total
    }
)
