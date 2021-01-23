import { gql } from '@apollo/client';

const CHARACTERS = {
  fragments: {
    location: gql`
      fragment location on Location {
        id
        name
        type
        dimension
      }
    `,
  },
};

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      origin {
        ...location
      }
      location {
        ...location
      }
      image
      episode {
        id
        name
        air_date
        episode
        created
      }
      created
    }
  }
  ${CHARACTERS.fragments.location}
`;
