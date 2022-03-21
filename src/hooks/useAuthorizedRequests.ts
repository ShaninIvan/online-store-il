import { AxiosRequestConfig } from 'axios'
import { SERVER_URL } from 'config/API'
import getPath from 'core/routing/getPath'
import { useNavigate } from 'react-router-dom'
import useAppSelector from './useAppSelector'

const useAuthorizedRequests = () => {
    const { jwt } = useAppSelector((state) => state.user)
    const navigate = useNavigate()

    const createAxiosGetParams = (path: string, urlParams: {} = {}) => {
        if (!jwt) {
            navigate(getPath('/login'))
            return
        }

        const params: AxiosRequestConfig = {
            method: 'GET',
            url: `${SERVER_URL}${path}`,
            params: {
                populate: '*',
                ...urlParams,
            },
            headers: {
                Authorization: jwt,
            },
        }

        return params
    }

    const createAxiosPostParams = (path: string, data: any) => {
        if (!jwt) {
            navigate(getPath('/login'))
            return
        }

        const params: AxiosRequestConfig = {
            method: 'POST',
            url: `${SERVER_URL}${path}`,
            data: data,
            headers: {
                Authorization: jwt,
            },
        }

        return params
    }

    return { createAxiosGetParams, createAxiosPostParams }
}

export default useAuthorizedRequests
