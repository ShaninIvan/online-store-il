import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SmallCard } from './SmallCard'
import { Provider } from 'react-redux'
import { store } from 'store/store'

export default {
    title: 'SmallCard',
    component: SmallCard,
} as ComponentMeta<typeof SmallCard>

const defaultArgs = {
    product: {
        id: 15,
        name: 'HP - Spectre x360 2-in-1 13.5"',
        price: 2065,
        inStock: 6,
        code: 'SKU 48646879',
        description:
            'HP - Spectre x360 2-in-1 13.5" 3K2K OLED Touchscreen Laptop - Intel Evo Core i7 - 16GB Memory - 1TB SSD + 32GB Intel Optane - Nightfall Black Tablet Notebook 14-ea1023dx',
        color: 'black',
        image: [
            {
                id: 22,
                imageUrl: 'https://i.onthe.io/smngoz4hj4egou8ue.91d5f7a1.jpg',
                imageAlt: 'HP - Spectre x360 2-in-1 13.5"',
            },
        ],
        specs: [
            {
                id: 50,
                name: 'CPU',
                value: 'N/A',
            },
            {
                id: 49,
                name: 'CPU',
                value: 'N/A',
            },
            {
                id: 48,
                name: 'CPU',
                value: 'N/A',
            },
        ],
        details: [],
        rating: {
            id: 14,
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            five: 0,
            reviews: 0,
        },
        category: {
            id: 38,
            name: 'HP Spectre',
        },
        brand: {
            id: 3,
            name: 'Hewlett-Packard',
        },
    },
}

const Template: ComponentStory<typeof SmallCard> = (args) => (
    <Provider store={store}>
        <SmallCard {...defaultArgs} {...args} />
    </Provider>
)

export const inStock = Template.bind({})
inStock.args = {
    onCardClick: (id: number) => {},
}

export const mobile = Template.bind({})
mobile.args = {
    mobile: true,
}
