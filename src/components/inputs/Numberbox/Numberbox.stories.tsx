import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Numberbox } from './Numberbox'

export default {
    title: 'Numberbox',
    component: Numberbox,
} as ComponentMeta<typeof Numberbox>

const defaultArgs = {
    value: 1,
    min: 1,
}

const Template: ComponentStory<typeof Numberbox> = (args) => (
    <Numberbox {...defaultArgs} {...args} />
)

export const max10 = Template.bind({})
max10.args = {
    max: 10,
    onChange: (value: number) => {},
}
