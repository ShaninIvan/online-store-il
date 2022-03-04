import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextBox } from './TextBox'

export default {
    title: 'TextBox',
    component: TextBox,
} as ComponentMeta<typeof TextBox>

const defaultArgs = {
    type: 'text',
    name: 'test',
    placeholder: 'test',
}

const Template: ComponentStory<typeof TextBox> = (args) => (
    <TextBox {...defaultArgs} {...args} />
)

export const base = Template.bind({})
base.args = {}

export const label = Template.bind({})
label.args = {
    label: 'test',
}

export const required = Template.bind({})
required.args = {
    label: 'test',
    required: true,
}
