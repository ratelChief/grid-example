import React from 'react';
import { Link } from 'react-router-dom';

import { RICK_AND_MORTY_CHARACTERS_LIST } from '../../constants/paths';

const getLink = (link) => `${RICK_AND_MORTY_CHARACTERS_LIST}/${link}`;

const CharacterList = (props) => (
  <ul>
    {props.list?.map((item) => (
      <li key={item.id}>
        <Link to={getLink(item.id)}>{item.name}</Link>
      </li>
    ))}
  </ul>
);

export default CharacterList;
