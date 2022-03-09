import { Paths } from 'config/routes'
import { generatePath } from 'react-router-dom'

const getPath = (path: Paths, params?: {}) => {
    if (!params) return path

    return generatePath(path, params)
}

export default getPath
