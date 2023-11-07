import { paths } from '@/routing/Paths';
import Login from './Login';

const AppRoutes = [
  {
    path: paths.auth.login,
    element: <Login />,
    exact: false,
  },
];
export default AppRoutes;
