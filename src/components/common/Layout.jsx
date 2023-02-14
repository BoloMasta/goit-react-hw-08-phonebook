import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

export const Layout = () => (
  <Container maxWidth="md">
    <AppBar />
    <Suspense
      fallback={
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', height: '100vh' }}
        >
          <CircularProgress />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  </Container>
);
