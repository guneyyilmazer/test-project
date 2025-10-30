import { createRouter } from '@tanstack/react-router';
import { Route as RootRoute } from './routes/__root';
import { Route as IndexRoute } from './routes/index';
import { Route as DataTableRoute } from './routes/data-table';
import { Route as AdminRoute } from './routes/admin';

const routeTree = RootRoute.addChildren([IndexRoute, DataTableRoute, AdminRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
