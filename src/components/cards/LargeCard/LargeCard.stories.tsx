import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LargeCard } from './LargeCard'

export default {
    title: 'LargeCard',
    component: LargeCard,
} as ComponentMeta<typeof LargeCard>

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
            one: 0,
            two: 2,
            three: 0,
            four: 0,
            five: 4,
            reviews: 10,
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

const Template: ComponentStory<typeof LargeCard> = (args) => (
    <LargeCard {...defaultArgs} {...args} />
)

export const discount = Template.bind({})
discount.args = {
    discount: 20,
}
