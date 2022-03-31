import PageHome from 'pages/PageHome'
import PageLogin from 'pages/PageLogin'
import { PageLoginAuth } from 'pages/PageLogin/components/Auth/PageLoginAuth'
import { PageLoginRegister } from 'pages/PageLogin/components/Register/PageLoginRegister'
import PageNotFound from 'pages/PageNotFound'
import { PageProductAbout } from 'pages/PageProduct/components/About/PageProductAbout'
import { PageProductDetails } from 'pages/PageProduct/components/Details/PageProductDetails'
import { PageProductSpecs } from 'pages/PageProduct/components/Specs/PageProductSpecs'
import PageTerms from 'pages/PageTerms'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

export type PATHS =
    | '/'
    | '/catalog/:id'
    | '/product/:id'
    | '/product/:id/details'
    | '/product/:id/specs'
    | '/contacts'
    | '/login'
    | '/login/register'
    | '/cart'
    | '/checkout'
    | '/dashboard'
    | '/about'
    | '/terms'

const PageCatalog = lazy(() => import('pages/PageCatalog'))
const PageProduct = lazy(() => import('pages/PageProduct'))
const PageContacts = lazy(() => import('pages/PageContacts'))
const PageAbout = lazy(() => import('pages/PageAbout'))
const PageCart = lazy(() => import('pages/PageCart'))
const PageCheckout = lazy(() => import('pages/PageCheckout'))
const PageDashboard = lazy(() => import('pages/PageDashboard'))

const ROUTES_CONFIG: RouteObject[] = [
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
                index: true,
                element: <PageProductAbout />,
            },
            {
                path: 'details',
                element: <PageProductDetails />,
            },
            {
                path: 'specs',
                element: <PageProductSpecs />,
            },
        ],
    },
    {
        path: '/contacts',
        element: <PageContacts />,
    },
    {
        path: '/login',
        element: <PageLogin />,
        children: [
            {
                index: true,
                element: <PageLoginAuth />,
            },
            {
                path: 'register',
                element: <PageLoginRegister />,
            },
        ],
    },
    {
        path: '/cart',
        element: <PageCart />,
    },
    {
        path: '/checkout',
        element: <PageCheckout />,
    },
    {
        path: '/dashboard',
        element: <PageDashboard />,
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
