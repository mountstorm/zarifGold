
import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';
import NotFound from '../pages/NotFound';

const Home = lazy(() => import('../pages/home/page'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
