import { Paths } from 'config/routes'
import { generatePath } from 'react-router-dom'

class RouteManager {
    public static getPath(path: Paths, params?: {}) {
        if (!params) return path

        return generatePath(path, params)
    }
}

export default RouteManager
