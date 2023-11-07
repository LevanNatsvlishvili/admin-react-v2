import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import MainView from '@/pages/MainView';
// import { paths } from './Paths';
import { AppRoutes, GuestRoutes } from '@/pages';
import { UserProvider } from '@/context/userContext';
import AuthGuard from './AuthGuard';

const router = createBrowserRouter([
  {
    path: '/app',
    element: <AuthGuard />,
    children: AppRoutes,
  },
  {
    path: '/',
    children: GuestRoutes,
  },
]);

const Routing = () => (
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);

export default Routing;
