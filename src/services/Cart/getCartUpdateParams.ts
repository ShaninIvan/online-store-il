import { AxiosRequestConfig } from 'axios'
import { SERVER_URL } from 'config/API'
import { CartOrderType } from 'types/UserType'

const getCartUpdateParams = (jwt: string, cartId: number, orders: CartOrderType[]) => {
    const json = JSON.stringify(orders)

    const params: AxiosRequestConfig = {
        method: 'PUT',
        url: `${SERVER_URL}/api/carts/${cartId}`,
        data: { data: { data: json } },
        headers: { Authorization: `Bearer ${jwt}` },
    }

    return params
}

export default getCartUpdateParams
