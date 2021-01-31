import { ApolloClient, InMemoryCache } from '@apollo/client';

import { userInfoVar } from './queries';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        user: {
          read() {
            return userInfoVar();
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache,
  connectToDevTools: true,
});

export default client;
