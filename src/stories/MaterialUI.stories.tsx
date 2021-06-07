import { Meta } from '@storybook/react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';
import { confirmation, createTheme } from './MaterialUI';
import { FC, useState } from 'react';
import { CssBaseline, useMediaQuery } from '@material-ui/core';

export const Sample: FC = () => {
  const [value, setValue] = useState(false);
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeType, setThemeType] = useState<'dark' | 'light'>(
    prefersDarkMode ? 'dark' : 'light'
  );
  const toggleThemeModal = () => {
    setThemeType(themeType === 'dark' ? 'light' : 'dark');
  };

  const handleClick = async () => {
    const isConfirmed = await confirmation({
      title: 'Title',
      body: 'Body',
      themeType,
    });
    setValue(isConfirmed);
    console.log(isConfirmed);
  };
  return (
    <ThemeProvider theme={createTheme(themeType)}>
      <CssBaseline />
      <Button id="toggle" onClick={handleClick}>
        Confirm
      </Button>
      <div id="result" style={{ margin: '2rem' }}>
        {value && 'Confirmed!!'}
      </div>
      <Button onClick={toggleThemeModal}>
        Switch to {themeType === 'dark' ? 'light' : 'dark'}
      </Button>
    </ThemeProvider>
  );
};

export default {
  title: 'Example/MaterialUI',
  component: Sample,
} as Meta;
