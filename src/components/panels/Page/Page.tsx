import React from 'react'
import { CSSTransition } from 'react-transition-group'
import './Page.less'

type PropsType = {
    children: React.ReactNode
}

export const Page: React.FC<PropsType> = ({ children }) => {
    return (
        <CSSTransition timeout={300} classNames='page'>
            {children}
        </CSSTransition>
    )
}
