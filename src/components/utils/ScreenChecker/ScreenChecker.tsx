import { MEDIA } from 'config/media'
import React from 'react'

type PropsType = {
    children: React.ReactNode
    desktop?: boolean
    tablet?: boolean
    mobile?: boolean
}

export const ScreenChecker: React.FC<PropsType> = ({
    children,
    desktop,
    tablet,
    mobile,
}) => {
    if (mobile && matchMedia(MEDIA.mobile).matches) return <>{children}</>
    if (tablet && matchMedia(MEDIA.tablet).matches) return <>{children}</>
    if (desktop && matchMedia(MEDIA.desktop).matches) return <>{children}</>

    return <></>
}
