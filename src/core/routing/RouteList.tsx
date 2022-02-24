import routesConfig from 'config/routes'
import React from 'react'
import { Routes, useRoutes } from 'react-router-dom'

export const RouteList: React.FC = () => {
    const routes = useRoutes(routesConfig)

    if (routes === null) {
        return <div>config/routes/routesConfig not found or incorrect</div>
    }

    return routes
}
