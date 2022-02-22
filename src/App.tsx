import { Footer } from 'container/Footer/Footer'
import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.less'

function App() {
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
