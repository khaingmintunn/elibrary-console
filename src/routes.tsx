import { Suspense, lazy } from 'react';
import type { PartialRouteObject } from 'react-router';
import LoadingScreen from './components/LoadingScreen';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

const Books = Loadable(lazy(() => import('./pages/books')));

const routes: PartialRouteObject[] = [
  {
    path: '/',
    element: (
      <>
        <Books />
      </>
    )
  }
];

export default routes;
