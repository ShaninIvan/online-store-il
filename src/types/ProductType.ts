import IAPIState from './IAPIState'

type ProductsColors = 'black' | 'white' | 'red' | 'blue' | 'gray' | 'gold' | 'silver'

export type ProductType = {
    id: number
    name: string
    code: string
    description: string
    category: {
        id: number
        name: string
    } | null
    brand: {
        id: number
        name: string
    } | null
    price: number
    image: ImageType[]
    details: DetailType[]
    specs: SpecType[]
    inStock: number
    rating: RatingType
}

type ImageType = {
    id: number
    imageUrl: string
    imageAlt: string
}

type DetailType = {
    id: number
    detail: string
}

type RatingType = {
    one: number
    two: number
    three: number
    four: number
    five: number
    reviews: number
}

export type SpecType = {
    id: number
    name: string
    value: string
}

export interface ProductStateType extends IAPIState {
    products: ProductType[]
}
