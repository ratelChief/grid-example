import { useQuery, useReactiveVar } from '@apollo/client';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { GET_CHARACTER } from '../../api/queries';
import { timeSettingsVar } from '../../api/localVariables';
import { TIME_FORMAT } from '../../constants/formats';

const CharactersDetails = () => {
  const { params } = useRouteMatch();
  const timeSettings = useReactiveVar(timeSettingsVar);
  const { loading, error, data = {} } = useQuery(GET_CHARACTER, {
    variables: { id: params.id },
  });

  const { character } = data;

  const toggleTimeFormat = () => {
    const currentTimeFormat = timeSettingsVar();

    if (currentTimeFormat === TIME_FORMAT.american) {
      return timeSettingsVar(TIME_FORMAT.russian);
    }

    return timeSettingsVar(TIME_FORMAT.american);
  };

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

        <div>
          <p>
            Was created:
            {new Intl.DateTimeFormat(timeSettings).format(
              new Date(character.created),
            )}
          </p>

          <button type="button" onClick={toggleTimeFormat}>
            Toggle time format
          </button>
        </div>
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
