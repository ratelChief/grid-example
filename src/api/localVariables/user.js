import { makeVar } from '@apollo/client';

export const userInfoVar = makeVar({
  name: 'Dennis',
  surname: 'Rodman',
  gender: 'Male',
});
