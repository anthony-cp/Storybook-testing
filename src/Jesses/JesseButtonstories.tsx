import { Meta, StoryObj } from '@storybook/react';
import Button from './JesseButton';

export default {
  title: 'Jesses/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'affirm', 'delete', 'subtle-delete', 'subtle'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta;

export const Primary: StoryObj = {
  args: {
    text: 'Primary Button',
    variant: 'primary',
  },
};

export const Loading: StoryObj = {
  args: {
    text: 'Loading Button',
    loading: true,
  },
};

export const Disabled: StoryObj = {
  args: {
    text: 'Disabled Button',
    disabled: true,
  },
};

// Add more variants as needed
