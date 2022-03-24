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

export const pageCatalogSortOptions = [
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

export const pageCatalogPerpageOption = [
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
