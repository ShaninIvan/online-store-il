import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Rating } from './Rating'

export default {
    title: 'Rating',
    component: Rating,
} as ComponentMeta<typeof Rating>

const defaultArgs = {}

const Template: ComponentStory<typeof Rating> = (args) => (
    <Rating {...defaultArgs} {...args} />
)

export const zero = Template.bind({})
zero.args = {
    stars: 0,
}

export const one = Template.bind({})
one.args = {
    stars: 1,
}

export const two = Template.bind({})
two.args = {
    stars: 2,
}

export const three = Template.bind({})
three.args = {
    stars: 3,
}

export const four = Template.bind({})
four.args = {
    stars: 4,
}

export const five = Template.bind({})
five.args = {
    stars: 5,
}
