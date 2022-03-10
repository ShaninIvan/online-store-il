import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SearchBox } from './SearchBox'

export default {
    title: 'SearchBox',
    component: SearchBox,
} as ComponentMeta<typeof SearchBox>

const defaultArgs = {
    callback: (value: string) => {},
}

const Template: ComponentStory<typeof SearchBox> = (args) => (
    <SearchBox {...defaultArgs} {...args} />
)

export const placeholder = Template.bind({})
placeholder.args = {
    placeholder: 'Search here...',
}
