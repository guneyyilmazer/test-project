import { createRootRoute, Outlet } from '@tanstack/react-router';
import Layout from '../components/layout/MainLayout';

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});
