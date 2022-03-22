import axios from 'axios'
import { SERVER_URL } from 'config/API'
import normalizeAPI from 'core/utils/normalizeAPI'
import useAppSelector from './useAppSelector'

type CartOrderType = {
    id: number
    count: number
}

const getFinalData = () => {}

const useCart = () => {
    const { jwt, user } = useAppSelector((state) => state.user)

    if (!jwt) {
        return null
    }

    const getCart = async () => {
        const response = await axios.get(`${SERVER_URL}/api/carts/${user.cart}`, {
            headers: { Authorization: `Bearer ${jwt}` },
        })

        const normalize = normalizeAPI(response.data)

        return normalize.data
    }

    const updateCart = async (orders: CartOrderType[]) => {
        const json = JSON.stringify(orders)

        try {
            const response = await axios.put(
                `${SERVER_URL}/api/carts/${user.cart}`,
                { data: { data: json } },
                {
                    headers: { Authorization: `Bearer ${jwt}` },
                }
            )

            const normalize = normalizeAPI(response.data)

            return normalize.data
        } catch (error) {
            return
        }
    }

    const addToCart = async (id: number, count: number) => {
        const cart = await getCart()
    }

    return { getCart, addToCart }
}

export default useCart
