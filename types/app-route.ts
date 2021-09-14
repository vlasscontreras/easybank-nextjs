import { ElementType } from 'react';

interface AppRoute {
  key: string;
  path: string;
  exact: boolean;
  routes?: AppRoute[];
  component: ElementType;
}

export default AppRoute;
