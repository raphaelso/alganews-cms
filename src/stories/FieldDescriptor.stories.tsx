import { Story, Meta } from '@storybook/react';
import FieldDescriptor, { ValueDescriptorProps } from '../components/FieldDescriptor/FieldDescriptor';

export default {
  title: 'Example/FieldDescriptor',
  component: FieldDescriptor,
} as Meta;

const Template: Story<ValueDescriptorProps> = (args) => <FieldDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  description: 'data de nascimento',
  value: '26 de Dezembro de 1997 (22 anos)'
}