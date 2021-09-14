import { Route } from 'react-router-dom';
import { ElementType, ReactElement } from 'react';
import AppRoute from 'src/types/app-route';

export default (route: AppRoute): ReactElement => {
  const Component: ElementType = route.component;

  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <Component {...props} routes={route.routes} />}
    />
  );
};
