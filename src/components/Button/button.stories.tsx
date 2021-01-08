import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { BaseButtonProps } from './button'


export default {
  title: 'Button Component',
  component: Button
} as Meta

const Template: Story<BaseButtonProps> =  (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Default'
}
