import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Facilities } from './Facilities'

export default {
    title: 'Facilities',
    component: Facilities,
} as ComponentMeta<typeof Facilities>

const defaultArgs = {}

const Template: ComponentStory<typeof Facilities> = (args) => (
    <Facilities {...defaultArgs} {...args} />
)

export const white = Template.bind({})
white.args = {
    background: 'white',
}

export const ghostly = Template.bind({})
ghostly.args = {
    background: 'ghostly',
}
