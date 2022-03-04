import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Availability } from './Availability'

export default {
    title: 'Availability',
    component: Availability,
} as ComponentMeta<typeof Availability>

const defaultArgs = {}

const Template: ComponentStory<typeof Availability> = (args) => (
    <Availability {...defaultArgs} {...args} />
)

export const five = Template.bind({})
five.args = {
    count: 5,
}

export const zero = Template.bind({})
zero.args = {
    count: 0,
}
