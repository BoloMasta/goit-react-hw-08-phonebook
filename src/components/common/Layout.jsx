import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
// import css from './Layout.module.scss';

export const Layout = () => (
  <div style={{ margin: '0 auto', maxWidth: '1000px' }}>
    <AppBar />
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
  </div>
);
