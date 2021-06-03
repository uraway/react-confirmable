import { Meta } from '@storybook/react';
import Button from '@material-ui/core/Button';
import { confirm } from './MaterialUI';
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
  title: 'Example/MaterialUI',
  component: Sample,
} as Meta;
