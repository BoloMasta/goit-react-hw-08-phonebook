import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.scss';

export const Layout = () => (
  <div className={css.layout}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
  </div>
);
