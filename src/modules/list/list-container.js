import React, { lazy, Suspense } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_CHARACTERS } from '../../api/queries';
import { LIST, LIST_ITEM } from '../../constants/paths';

import './list.css';

// TODO: fix this workaround based on babelparer eslint
const getUrl = (baseUrl, path) => `${baseUrl}/${path}`;

const ListContainer = () => {
  const ListItem = lazy(() => import('./list-item'));

  const { url } = useRouteMatch();
  const { data } = useQuery(GET_CHARACTERS);

  return (
    <div>
      <h2>List</h2>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={LIST_ITEM}>
            <ListItem />
          </Route>

          <Route path={LIST} exact>
            <ul>
              {data?.characters.results.map(({ name = '' }) => (
                <li key={name} className="nav-list__item">
                  <Link to={getUrl(url, name)}>{name}</Link>
                </li>
              ))}
            </ul>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default ListContainer;
