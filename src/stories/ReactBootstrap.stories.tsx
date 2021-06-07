import { Meta } from '@storybook/react';
import { Button } from 'react-bootstrap';
import { confirmation } from './ReactBootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FC, useState } from 'react';

export const Sample: FC = () => {
  const [value, setValue] = useState(false);
  const handleClick = async () => {
    const isConfirmed = await confirmation({
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
      <div id="result" style={{ margin: '2rem' }}>
        {value && 'Confirmed!!'}
      </div>
    </div>
  );
};

export default {
  title: 'Example/ReactBootstrap',
  component: Sample,
} as Meta;
