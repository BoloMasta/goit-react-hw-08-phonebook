import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import Container from '@mui/material/Container';

export const Layout = () => (
  <Container maxWidth="md">
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
  </Container>
);
