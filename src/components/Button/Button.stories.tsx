import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  text: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  text: 'Button'
};
