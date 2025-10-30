import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import AdminPanel from '../pages/AdminPanel';

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/admin',
  component: AdminPanel,
});
