import { ScrollerTop } from 'components/utils/ScrollerTop/ScrollerTop'
import ROUTES_CONFIG from 'config/routes'
import React, { Suspense } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import styles from './Main.module.less'
import './PageTransition.less'

export const Main: React.FC = () => {
    const routes = useRoutes(ROUTES_CONFIG)
    const { pathname } = useLocation()

    const parent = pathname.match(/\/[a-z]*\/[0-9]*/)

    return (
        <main className={styles.main}>
            <TransitionGroup component={null}>
                <CSSTransition
                    key={parent && parent[0]}
                    classNames='page'
                    timeout={3000}
                    unmountOnExit
                >
                    <Suspense fallback={<div>...</div>}>
                        <>
                            <ScrollerTop />
                            {routes}
                        </>
                    </Suspense>
                </CSSTransition>
            </TransitionGroup>
        </main>
    )
}
