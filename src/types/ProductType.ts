import { CategoryType } from './CategoryType'

export type ProductType = {
    id: number
    name: string
    code: string
    category: CategoryType
    price: string
    photo: PhotoType[]
    details: DetailType[]
    specs: SpecType[]
    count?: number
    stars?: number
    reviews?: number
}

type PhotoType = {
    url: string
    alternativeText?: string
    previewUrl?: string | null
}

type DetailType = {
    id: number
    detail: string
}

export type SpecType = {
    id: number
    name: string
    value: string
}

export type ProductStateType = {
    products: ProductType[]
    isLoading: boolean
    error: string | null
}
