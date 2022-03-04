import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Specs } from './Specs'

export default {
    title: 'Specs',
    component: Specs,
} as ComponentMeta<typeof Specs>

const defaultArgs = {}

const Template: ComponentStory<typeof Specs> = (args) => (
    <Specs {...defaultArgs} {...args} />
)

export const test = Template.bind({})
test.args = {
    data: [
        {
            id: 1,
            name: '121312',
            value: 'N/A',
        },
        {
            id: 2,
            name: '121312',
            value: 'N/A',
        },
        {
            id: 3,
            name: '121312',
            value: 'N/A',
        },
    ],
}
