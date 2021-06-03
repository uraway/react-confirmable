import { Meta } from '@storybook/react';
import { confirm } from './ChakraUI';
import { FC, useState } from 'react';
import {
  ChakraProvider,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

const Sample: FC = () => {
  const [value, setValue] = useState(false);

  const handleClick = async () => {
    const isConfirmed = await confirm({
      title: 'Title',
      body: 'Body',
    });
    setValue(isConfirmed);
    console.log(isConfirmed);
  };

  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');

  return (
    <div>
      <Button id="toggle" onClick={handleClick} colorScheme="blue">
        Confirm
      </Button>
      <label id="label" style={{ margin: '2rem' }}>
        isConfirmed: {String(value)}
      </label>
      <Button onClick={toggleColorMode}>Switch to {text}</Button>
    </div>
  );
};

export const Wrapper: FC = () => {
  return (
    <ChakraProvider>
      <Sample />
    </ChakraProvider>
  );
};

export default {
  title: 'Example/ChakraUI',
  component: Wrapper,
} as Meta;
