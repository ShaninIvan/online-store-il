import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Circle } from './Circle'

export default {
    title: 'Circle',
    component: Circle,
} as ComponentMeta<typeof Circle>

const defaultArgs = {
    callback: () => {},
}

const Template: ComponentStory<typeof Circle> = (args) => (
    <Circle {...defaultArgs} {...args} />
)

export const heart = Template.bind({})
heart.args = {
    type: 'heart',
}

export const stats = Template.bind({})
stats.args = {
    type: 'stats',
}

export const email = Template.bind({})
email.args = {
    type: 'email',
}
