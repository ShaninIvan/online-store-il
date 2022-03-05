import IAPIState from './IAPIState'

export type CategoryType = {
    id: number
    name: string
    image: ImageType | null
    parent: CategoryType | null
    subCategories?: CategoryType[]
}

type ImageType = {
    url: string
    alternativeText: string
    previewUrl: string | null
}

export interface CategoryStateType extends IAPIState {
    categories: CategoryType[]
}
