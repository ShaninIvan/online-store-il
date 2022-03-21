import { PATHS } from 'config/routes'
import { generatePath } from 'react-router-dom'

const getPath = (path: PATHS, params?: {}) => {
    if (!params) return path

    return generatePath(path, params)
}

export default getPath
