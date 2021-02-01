import { gql } from '@apollo/client';

export const GET_USER_INFO = gql`
  query User {
    user @client {
      gender
      name
      surname
    }
  }
`;
