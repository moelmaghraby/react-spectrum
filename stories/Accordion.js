import {Accordion, AccordionItem} from '../src/Accordion';
import {action, storiesOf} from '@storybook/react';
import React from 'react';
import {VerticalCenter} from '../.storybook/layout';

storiesOf('Accordion', module)
  .addDecorator(story => (
    <VerticalCenter style={{textAlign: 'left', margin: '0 100px 50px', position: 'static', transform: 'none'}}>
      {story()}
    </VerticalCenter>
  ))
  .addWithInfo(
    'Default',
    'This is the basic usage of the Accordion.',
    () => render(),
    {inline: true}
  )
  .addWithInfo(
    'Multiselectable',
    'This is an Accordion where you can open multiple accordion items.',
    () => render({multiselectable: true}),
    {inline: true}
  )
  .addWithInfo(
    'Default selected index',
    'This is an Accordion where the the second accordion item is opened by default.',
    () => render({defaultSelectedIndex: 1}),
    {inline: true}
  )
  .addWithInfo(
    'Selected index',
    'This is a controlled Accordion where the the second accordion item is opened by default.',
    () => render({selectedIndex: 1}),
    {inline: true}
  )
  .addWithInfo(
    'ariaLevel',
    'This is an Accordion where heading level for Accordion item headings has been changed from its default value of 3 to 4. This allows a developer to place Accordion headings with in the heading hierarchy of the application.',
    () => render({ariaLevel: 4}),
    {inline: true}
  );

function render(props = {}) {
  return (
    <Accordion {...props} onChange={action('onChange')}>
      <AccordionItem header="Header 1">Item 1</AccordionItem>
      <AccordionItem header="Header 2">Item 2</AccordionItem>
      <AccordionItem header="Header 3" disabled>Item 3</AccordionItem>
      <AccordionItem header="Header 4">Item 4</AccordionItem>
    </Accordion>
  );
}
