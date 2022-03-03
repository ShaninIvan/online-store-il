import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from './Button'

export default {
    title: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>

const defaultArgs = {
    children: <div></div>,
}

const Template: ComponentStory<typeof Button> = (args) => (
    <Button {...defaultArgs} {...args}>
        Go to checkout
    </Button>
)

export const tranparentBlue = Template.bind({})
tranparentBlue.args = {
    preset: 'tranparent-blue',
}

export const blueWhite = Template.bind({})
blueWhite.args = {
    preset: 'blue-white',
}

export const paypal = Template.bind({})
paypal.args = {
    preset: 'orange-black',
    paypal: true,
}

export const transparentGray = Template.bind({})
transparentGray.args = {
    preset: 'transparent-gray',
}

export const blackWhite = Template.bind({})
blackWhite.args = {
    preset: 'black-white',
}
