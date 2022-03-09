import Footer from 'container/Footer'
import Header from 'container/Header'
import Main from 'container/Main'
import ErrorBoundary from 'core/ErrorBoundary'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './global.less'
import useScreenResizeHandler from 'hooks/useScreenResizeHandler'
import useAPILoader from 'hooks/useAPILoader'
import { fetchSettings } from 'store/slices/settingsSlice'
import Loader from 'components/utils/APILoader'
import { fetchCategories } from 'store/slices/categorySlice'
import { fetchBrands } from 'store/slices/brandSlice'

const thunks = [fetchSettings, fetchCategories, fetchBrands]

function App() {
    useScreenResizeHandler()
    const isLoading = useAPILoader(thunks)

    return (
        <ErrorBoundary onError={<>Ups!</>}>
            <BrowserRouter>
                <div className='App'>
                    <Loader isLoading={isLoading} />
                    <Header />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    )
}

export default App
