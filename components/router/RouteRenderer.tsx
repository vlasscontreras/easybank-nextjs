import { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import RouteWithSubRoutes from 'src/components/router/RouteWithSubRoutes';
import NotFound from 'src/screens/errors/NotFound';
import AppRoute from 'src/types/app-route';

/**
 * Use this component for any new section of routes (any config
 * object that has a "routes" property
 */
export default ({ routes }: { routes: AppRoute[] }): ReactElement => {
  return (
    <Switch>
      {routes.map((route) => {
        return <RouteWithSubRoutes {...route} />;
      })}
      <Route component={NotFound} />
    </Switch>
  );
};
