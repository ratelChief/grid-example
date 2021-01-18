import React from 'react';
import { useParams } from 'react-router-dom';

const ListItem = () => {
  const { id } = useParams();

  return <h3>Requested topic ID: {id}</h3>;
};

export default ListItem;
