import { GlobalStyles } from '@mui/material';

export const homePageStyles = (
  <GlobalStyles
    styles={{
      '*': {
        boxSizing: 'border-box',
        padding: '0',
        margin: '0',
      },
      body: {
        backgroundImage: 'linear-gradient(to right, #00c3ff, #ffff1c)',
        padding: '0 20px',
        margin: '0',
        overflowY: 'scroll',
        overflow: 'overlay',
      },
      '.MuiTypography-root': {
        color: 'black',
      },
      scrollbarWidth: '5px',
      scrollbarColor: 'rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1)',
      '&::-webkit-scrollbar': {
        width: '5px',
      },
      '&::-webkit-scrollbar-track': {
        background: 'rgba(0, 0, 0, 0.1)',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(0, 0, 0, 0.2)',
      },
    }}
  />
);