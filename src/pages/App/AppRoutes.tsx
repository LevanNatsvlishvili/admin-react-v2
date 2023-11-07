import { paths } from '@/routing/Paths';
import Home from './Home';

const AppRoutes = [
  {
    path: paths.app.home,
    element: <Home />,
  },
  {
    path: paths.app.navigation,
    element: <Home />,
  },
];
export default AppRoutes;
