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

export type CategoryStateType = {
    categories: CategoryType[]
    isLoading: boolean
    error: string | null
}
