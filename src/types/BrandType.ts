import IAPIState from './IAPIState'

export type BrandType = {
    id: number
    name: string
    image: {
        imageUrl: string
        imageAlt: string
    }
}

export interface BrandStateType extends IAPIState {
    brands: BrandType[]
}
