import { createRoute } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';
import DataTable from '../pages/DataTable';

export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/data-table',
  component: DataTable,
});
