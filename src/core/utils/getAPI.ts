import { API, SERVER_URL } from 'config/API'

export const getAPI = (route: API) => {
    return `${SERVER_URL}/api${route}?populate=*&pagination[pageSize]=100`
}
