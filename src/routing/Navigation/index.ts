import { Home, Navigation } from '@mui/icons-material';
// import { paths } from '@/routing/Paths';
import { SvgIconProps } from '@mui/material';

export interface Node {
  id: string;
  title?: string;
  url?: string;
  icon?: React.ComponentType<SvgIconProps>;
  children?: Node[];
  header?: string;
  exact?: boolean;
}

const navigation: Node[] = [
  { id: 'layout', header: 'Layout' },
  {
    id: 'home',
    title: 'Home',
    icon: Home,
    url: '/app/home',
  },
  {
    id: 'navigation',
    title: 'Navigation',
    icon: Navigation,
    url: '/app/navigation',
  },
];

export default navigation;
