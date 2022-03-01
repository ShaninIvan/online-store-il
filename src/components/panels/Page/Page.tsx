import React from 'react'

type PropsType = {
    children: React.ReactNode
}

export const Page: React.FC<PropsType> = ({ children }) => {
    return <>{children}</>
}
