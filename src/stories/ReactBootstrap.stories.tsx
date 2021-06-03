import { Meta } from '@storybook/react';
import { Button } from 'react-bootstrap';
import { confirm } from './ReactBootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FC, useState } from 'react';

export const Sample: FC = () => {
  const [value, setValue] = useState(false);
  const handleClick = async () => {
    const isConfirmed = await confirm({
      title: 'Title',
      body: 'Body',
    });
    setValue(isConfirmed);
    console.log(isConfirmed);
  };
  return (
    <div>
      <Button id="toggle" onClick={handleClick}>
        Confirm
      </Button>
      <label id="label" style={{ margin: '2rem' }}>
        isConfirmed: {String(value)}
      </label>
    </div>
  );
};

export default {
  title: 'Example/ReactBoostrap',
  component: Sample,
} as Meta;
