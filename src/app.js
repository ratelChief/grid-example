import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HOME, LIST, USER } from './constants/paths';

function App() {
  const Home = lazy(() => import('./modules/home'));
  const List = lazy(() => import('./modules/list'));
  const User = lazy(() => import('./modules/user'));
  const Header = lazy(() => import('./components/header'));
  const SimpleLayout = lazy(() => import('./modules/layouts/simple-layout'));

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Header is loading...</div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div>Body is loading...</div>}>
        <Switch>
          <Route path={LIST}>
            <SimpleLayout>
              <List />
            </SimpleLayout>
          </Route>
          <Route path={USER}>
            <User />
          </Route>
          <Route path={HOME}>
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
