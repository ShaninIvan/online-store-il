import Footer from 'container/Footer'
import Header from 'container/Header'
import Main from 'container/Main'
import ErrorBoundary from 'core/ErrorBoundary'
import { ResizeObserver } from 'core/observers/ResizeObserver'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './global.less'
import './assets/icons/icons.css'

function App() {
    const [, setScreenWidth] = useState<number>(0)
    const resizeObserver = ResizeObserver.getObserver()

    useEffect(() => {
        resizeObserver.setListener(setScreenWidth)
    }, [resizeObserver])

    return (
        <ErrorBoundary onError={<>Ups!</>}>
            <BrowserRouter>
                <div className='App'>
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App
