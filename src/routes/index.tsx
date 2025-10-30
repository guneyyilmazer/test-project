import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import TableConfig from '../pages/TableConfig';

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/',
  component: TableConfig,
});
