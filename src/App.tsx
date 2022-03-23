import Footer from 'container/Footer'
import Header from 'container/Header'
import Main from 'container/Main'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './global.less'
import useScreenResizeHandler from 'hooks/useScreenResizeHandler'
import useAPILoader from 'hooks/useAPILoader'
import { fetchSettings } from 'store/slices/settingsSlice'
import Loader from 'components/utils/Loader'
import { fetchCategories } from 'store/slices/categorySlice'
import { fetchBrands } from 'store/slices/brandSlice'
import { fetchProducts } from 'store/slices/productSlice'
import CartLoader from 'components/utils/CartLoader'

const thunks = [fetchSettings, fetchCategories, fetchBrands, fetchProducts]

function App() {
    useScreenResizeHandler()
    const isLoading = useAPILoader(thunks)

    return (
        <BrowserRouter>
            <div className='App'>
                <Loader isLoading={isLoading} />
                <CartLoader />
                <Header />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
