import { Suspense, useCallback, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  RICK_AND_MORTY_CHARACTER,
  RICK_AND_MORTY_CHARACTERS_LIST,
} from '../../constants/paths';

import Form from './form';
import CharacterDetails from './character-details';
import CharacterList from './character-list';
import { Breadcrumbs } from '../../components';

const Main = () => {
  const [list, setData] = useState({});

  const handleAddData = useCallback((data) => {
    setData(data.characters);
  }, []);

  return (
    <>
      <Breadcrumbs />
      <Form onSubmit={handleAddData} />

      <Suspense>
        <Switch>
          <Route path={RICK_AND_MORTY_CHARACTER} exact>
            <CharacterDetails />
          </Route>
          <Route path={RICK_AND_MORTY_CHARACTERS_LIST}>
            <CharacterList list={list?.results} />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default Main;
