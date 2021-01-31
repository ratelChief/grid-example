import { gql, makeVar } from '@apollo/client';

export const userInfoVar = makeVar({
  name: 'Dennis',
  surname: 'Rodman',
  gender: 'Male',
});

export const GET_USER_INFO = gql`
  query User {
    user @client {
      gender
      name
      surname
    }
  }
`;
