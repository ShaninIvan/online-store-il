import Footer from 'container/Footer'
import Header from 'container/Header'
import Main from 'container/Main'
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
