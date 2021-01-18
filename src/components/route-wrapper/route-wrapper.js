import React from 'react';
import { Route } from 'react-router-dom';

const RouteWrapper = (props) => {
  const { component: Component, layout: Layout, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(renderProps) => (
        <Layout {...renderProps}>
          <Component {...renderProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWrapper;
