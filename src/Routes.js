/* eslint-disable react/no-array-index-key */
import React, { lazy, Suspense, Fragment } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import AnotherLayout from './layouts/AnotherLayout'

const routesConfig = [
  {
    path: '/',
    component: lazy(() => import('./layouts/HomeLayout')),
  },
  {
    exact: true,
    path: '/another',
    component: lazy(() => import('./layouts/AnotherLayout')),
  },
]

const renderRoutes = routes =>
  routes ? (
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment
        const Component = route.component

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={props => (
              <Layout>
                {route.routes ? (
                  renderRoutes(route.routes)
                ) : (
                  <Component {...props} />
                )}
              </Layout>
            )}
          />
        )
      })}
    </Switch>
  ) : null

function Routes() {
  return renderRoutes(routesConfig)
}

export default Routes
