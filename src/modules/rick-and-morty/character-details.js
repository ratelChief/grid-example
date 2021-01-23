import { useQuery } from '@apollo/client';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { GET_CHARACTER } from '../../api/queries';

const CharactersDetails = () => {
  const { params } = useRouteMatch();
  const { loading, error, data = {} } = useQuery(GET_CHARACTER, {
    variables: { id: params.id },
  });

  const { character } = data;

  console.log('data', character);

  if (loading) {
    return 'Loading..';
  }

  if (error) {
    return JSON.stringify(error);
  }

  return (
    <section>
      <h1>{character.name} Character Details</h1>

      <section>
        <h2>Summary</h2>
        <div>
          <img src={character.image} alt={character.name} />
        </div>

        <div>Was created: {character.created}</div>
        <div>Species: {character.species}</div>
        <div>Is Alive: {character.status}</div>
      </section>

      <section>
        <h2>Episodes</h2>

        <ul>
          {character.episode.map((episode) => (
            <li key={episode.id}>{episode.name}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default CharactersDetails;
