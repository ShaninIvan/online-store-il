import PageHome from 'pages/PageHome'
import PageLogin from 'pages/PageLogin'
import PageNotFound from 'pages/PageNotFound'
import ProductAbout from 'pages/PageProduct/components/ProductAbout'
import ProductDetails from 'pages/PageProduct/components/ProductDetails'
import ProductSpecs from 'pages/PageProduct/components/ProductSpecs'
import PageTerms from 'pages/PageTerms'
import { lazy } from 'react'
import { ROLES } from './roles'

export type RouteType = {
    path: string
    element: React.ReactNode
    children?: RouteType[]
    roles?: ROLES[]
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

const PageCatalog = lazy(() => import('pages/PageCatalog'))
const PageProduct = lazy(() => import('pages/PageProduct'))
const PageContacts = lazy(() => import('pages/PageContacts'))
const PageAbout = lazy(() => import('pages/PageAbout'))
const PageCart = lazy(() => import('pages/PageCart'))
const PageCheckout = lazy(() => import('pages/PageCheckout'))
const PageDashboard = lazy(() => import('pages/PageDashboard'))

const ROUTES_CONFIG: RouteType[] = [
    {
        path: '/',
        element: <PageHome />,
    },
    {
        path: '/catalog/:id',
        element: <PageCatalog />,
    },
    {
        path: '/product/:id',
        element: <PageProduct />,
        children: [
            {
                path: 'about',
                element: <ProductAbout />,
            },
            {
                path: 'details',
                element: <ProductDetails />,
            },
            {
                path: 'specs',
                element: <ProductSpecs />,
            },
        ],
    },
    {
        path: '/contacts',
        element: <PageContacts />,
        roles: [ROLES.User],
    },
    {
        path: '/login',
        element: <PageLogin />,
        roles: [ROLES.Guest],
    },
    {
        path: '/cart',
        element: <PageCart />,
        roles: [ROLES.User],
    },
    {
        path: '/checkout',
        element: <PageCheckout />,
        roles: [ROLES.User],
    },
    {
        path: '/dashboard',
        element: <PageDashboard />,
        roles: [ROLES.User],
    },
    {
        path: '/about',
        element: <PageAbout />,
    },
    {
        path: '/terms',
        element: <PageTerms />,
    },
    {
        path: '*',
        element: <PageNotFound />,
    },
]

export default ROUTES_CONFIG
