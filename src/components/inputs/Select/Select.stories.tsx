import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Select } from './Select'

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>

const options = [
    { value: 5, name: '5 per page' },
    { value: 15, name: '15 per page' },
    { value: 25, name: '25 per page' },
    { value: 35, name: '35 per page' },
]

const defaultArgs = {
    options: options,
}

const Template: ComponentStory<typeof Select> = (args) => <Select {...defaultArgs} {...args} />

export const test = Template.bind({})
test.args = {
    title: 'show',
    callback: () => {},
}
