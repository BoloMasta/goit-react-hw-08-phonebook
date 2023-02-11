import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import App from 'components/App';
import './index.css';
import { GlobalStyles } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#3f5176',
    },
    secondary: {
      main: '#f50057',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
theme = responsiveFontSizes(theme);

const homePageStyles = (
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ThemeProvider theme={theme}>
            {homePageStyles}
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
