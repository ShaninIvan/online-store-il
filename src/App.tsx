import Footer from 'container/Footer'
import Header from 'container/Header'
import Main from 'container/Main'
import { ResizeObserver } from 'core/observers/ResizeObserver'
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.less'
import './assets/icons/icons.css'

function App() {
    const [, setScreenWidth] = useState<number>(0)
    const resizeObserver = ResizeObserver.getObserver()

    useEffect(() => {
        resizeObserver.setListener(setScreenWidth)
    }, [resizeObserver])

    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
