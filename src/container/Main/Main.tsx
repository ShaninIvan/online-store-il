import ROUTES_CONFIG from 'config/routes'
import React, { Suspense } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './Main.module.less'
import './PageTransition.less'

export const Main: React.FC = () => {
    const routes = useRoutes(ROUTES_CONFIG)
    const location = useLocation()

    return (
        <main className={styles.main}>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.pathname}
                    classNames='page'
                    timeout={3000}
                    unmountOnExit
                >
                    <Suspense fallback={<div>...</div>}>
                        <>{routes}</>
                    </Suspense>
                </CSSTransition>
            </TransitionGroup>
        </main>
    )
}
