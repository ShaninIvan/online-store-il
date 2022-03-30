import { CatalogParamsShowType, CatalogParamsSortType } from 'types/CatalogType'

type PriceType = {
    title: string
    code: string
    test: (price: number) => boolean
}

export const pageCatalogPrices: PriceType[] = [
    {
        title: '$0.00 - $1,000.00',
        code: '0',
        test: (price: number) => price >= 0 && price < 1000,
    },
    {
        title: '$1,000.00 - $2,000.00',
        code: '1000',
        test: (price: number) => price >= 1000 && price < 2000,
    },
    {
        title: '$2,000.00 - $3,000.00',
        code: '2000',
        test: (price: number) => price >= 2000 && price < 3000,
    },
    {
        title: '$3,000.00 - $4,000.00',
        code: '3000',
        test: (price: number) => price >= 3000 && price < 4000,
    },
    {
        title: '$4,000.00 - $5,000.00',
        code: '4000',
        test: (price: number) => price >= 4000 && price < 5000,
    },
    {
        title: '$5,000.00 - $6,000.00',
        code: '5000',
        test: (price: number) => price >= 5000 && price < 6000,
    },
    {
        title: '$6,000.00 - $7,000.00',
        code: '6000',
        test: (price: number) => price >= 6000 && price < 7000,
    },
    {
        title: '$7,000.00 And Above',
        code: '7000',
        test: (price: number) => price >= 7000,
    },
]

type SortType = { name: string; value: CatalogParamsSortType }

export const pageCatalogSortOptions: SortType[] = [
    {
        name: 'Position',
        value: 'position',
    },
    {
        name: 'Name',
        value: 'name',
    },
    {
        name: 'Price',
        value: 'price',
    },
]

type ShowType = { name: string; value: CatalogParamsShowType }

export const pageCatalogShowOption: ShowType[] = [
    {
        name: '5 per page',
        value: 5,
    },
    {
        name: '15 per page',
        value: 15,
    },
    {
        name: '25 per page',
        value: 25,
    },
]

export const PageCatalogDescriptionMock = (
    <article>
        <p>
            MSI has unveiled the Prestige Series line of business-class and gaming notebooks. Tuned
            for color accuracy, the Prestige Series also leverages True Color Technology, which
            allows users to adjust the display profile to best fit their computing needs.
        </p>
        <br />
        <p>
            There are six different screen profiles, which are tuned for gaming, reducing eye
            fatigue, sRGB color accuracy, increasing clarity for words and lines, reducing harmful
            blue light, and optimizing contrast for watching movies. Given the various display
            profiles and discrete graphics chip, the Prestige Series notebooks can be used for
            various design work as well as for office tasks given that the screen can be adjusted
            for better clarity, color accuracy, or for eye strain reduction. Users working with
            video or 3D rendering will appreciate the "movie mode" for which contrast is increased.
        </p>
        <br />
        <p>
            Home users or students can benefit from the "anti-blue" and the "office mode" options,
            both of which are designed to reduce eye strain. This is helpful when working on the
            computer for extended periods of time. Additionally, in their down time, students can
            also use the "gamer mode" to increase the screen brightness.
        </p>
    </article>
)
