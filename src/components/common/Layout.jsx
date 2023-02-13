import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import Container from '@mui/material/Container';
import { Notification } from 'components/Notification/Notification';

export const Layout = () => (
  <Container maxWidth="md">
    <AppBar />
    <Suspense fallback={<Notification message="Loading..." />}>
      <Outlet />
    </Suspense>
  </Container>
);
