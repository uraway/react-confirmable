// @flow
/* eslint no-console:0 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

import Button from 'react-bootstrap/lib/Button';
import MaterialUIButton from 'material-ui/Button';

import bootstrapConfirm from './react-bootstrap/confirm';
import materialUIConfirm from './material-ui/confirm';

async function handleClick(confirm) {
  const isConfirmed = await confirm({
    title: 'CAUTION',
    body: 'Are you sure?',
  });
  console.log(isConfirmed);
}

storiesOf('confirm', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add('Bootstrap', () => (
    <Button onClick={() => handleClick(bootstrapConfirm)}>Click me!</Button>
  ))
  .add('Material-UI', () => (
    <MaterialUIButton
      variant="raised"
      onClick={() => handleClick(materialUIConfirm)}
    >
      Click me!
    </MaterialUIButton>
  ));
