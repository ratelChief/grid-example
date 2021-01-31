import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DEVICE, HOME, LIST, RICK_AND_MORTY, USER } from './constants/paths';

import './app.css';

function App() {
  const Home = lazy(() => import('./modules/home'));
  const List = lazy(() => import('./modules/list'));
  const User = lazy(() => import('./modules/user'));
  const Header = lazy(() => import('./components/header'));
  const SimpleLayout = lazy(() => import('./modules/layouts/simple-layout'));
  const RickAndMorty = lazy(() => import('./modules/rick-and-morty'));
  const Device = lazy(() => import('./modules/device'));

  return (
    <BrowserRouter>
      <Switch>
        <Route path={DEVICE} exact>
          <Suspense fallback="Device is loading...">
            <Device />
          </Suspense>
        </Route>

        <Route path={HOME}>
          <Suspense fallback={<div>Header is loading...</div>}>
            <Header />
          </Suspense>

          <main className="main">
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
                <Route path={RICK_AND_MORTY}>
                  <RickAndMorty />
                </Route>
                <Route path={HOME} exact>
                  <Home />
                </Route>
              </Switch>
            </Suspense>
          </main>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
