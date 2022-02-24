import PageAbout from 'pages/PageAbout'
import PageCart from 'pages/PageCart'
import PageCatalog from 'pages/PageCatalog'
import PageCheckout from 'pages/PageCheckout'
import PageContacts from 'pages/PageContacts'
import PageDashboard from 'pages/PageDashboard'
import PageHome from 'pages/PageHome'
import PageLogin from 'pages/PageLogin'
import PageNotFound from 'pages/PageNotFound'
import PageProduct from 'pages/PageProduct'
import ProductAbout from 'pages/PageProduct/components/ProductAbout'
import ProductDetails from 'pages/PageProduct/components/ProductDetails'
import ProductSpecs from 'pages/PageProduct/components/ProductSpecs'
import PageTerms from 'pages/PageTerms'
import { Roles, RolesConfig } from './roles'

export type RouteType = {
    path: string
    element: React.FC
    roles?: (keyof typeof RolesConfig)[]
    children?: RouteType[]
}

export enum Paths {
    home = '/',
    catalog = '/catalog/:id',
    product = '/product/:id',
    productAbout = '/product/:id/about',
    productDetails = '/product/:id/details',
    productSpecs = '/product/:id/specs',
    contacts = '/contacts',
    login = '/login',
    cart = '/cart',
    checkout = '/checkout',
    dashboard = '/dashboard',
    about = '/about',
    terms = '/terms',
}

const routesConfig: RouteType[] = [
    {
        path: '/',
        element: PageHome,
    },
    {
        path: '/catalog/:id',
        element: PageCatalog,
    },
    {
        path: '/product/:id',
        element: PageProduct,
        children: [
            {
                path: 'about',
                element: ProductAbout,
            },
            {
                path: 'details',
                element: ProductDetails,
            },
            {
                path: 'specs',
                element: ProductSpecs,
            },
        ],
    },
    {
        path: '/contacts',
        element: PageContacts,
        roles: [Roles.User],
    },
    {
        path: '/login',
        element: PageLogin,
        roles: [Roles.Guest],
    },
    {
        path: '/cart',
        element: PageCart,
        roles: [Roles.User],
    },
    {
        path: '/checkout',
        element: PageCheckout,
        roles: [Roles.User],
    },
    {
        path: '/dashboard',
        element: PageDashboard,
        roles: [Roles.User],
    },
    {
        path: '/about',
        element: PageAbout,
    },
    {
        path: '/terms',
        element: PageTerms,
    },
    {
        path: '*',
        element: PageNotFound,
    },
]

export default routesConfig
