import Footer from 'container/Footer'
import Header from 'container/Header'
import Main from 'container/Main'
import ErrorBoundary from 'core/ErrorBoundary'
import { ResizeObserver } from 'core/observers/ResizeObserver'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './global.less'
import { fetchSettings } from 'store/slices/settingsSlice'
import { useAppDispatch } from 'hooks/useAppDispatch'

function App() {
    const [, setScreenWidth] = useState<number>(0)
    const resizeObserver = ResizeObserver.getObserver()

    const dispatch = useAppDispatch()

    useEffect(() => {
        resizeObserver.setListener(setScreenWidth)
        dispatch(fetchSettings())
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
