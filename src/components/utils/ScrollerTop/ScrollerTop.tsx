import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollerTop: React.FC = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [pathname])

    return null
}
