import { AxiosRequestConfig } from 'axios'
import { SERVER_URL } from 'config/API'

const getCartLoadParams = (jwt: string, cartId: number) => {
    const params: AxiosRequestConfig = {
        method: 'GET',
        url: `${SERVER_URL}/api/carts/${cartId}`,
        headers: { Authorization: `Bearer ${jwt}` },
    }

    return params
}

export default getCartLoadParams
