import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './config'

const RouteWithSubRoutes = route => {
  if (route.routes) {
    return (
      <Route
        exact={route.exact}
        path={route.path}
        render={props => (
          <route.component {...props} nav={route.nav}>
            <Switch>
              {route.routes.map(r => (
                <RouteWithSubRoutes key={`sub-routes-${r.path}`} {...r} />
              ))}
            </Switch>
          </route.component>
        )}
      />
    );
  }
  return <Route {...route} />;
};

const RouteConfig = () => (
  <Switch>
    {routes.map(r => (
      <RouteWithSubRoutes key={`route-${r.path}`} {...r} />
    ))}
  </Switch>
);

export default RouteConfig;
