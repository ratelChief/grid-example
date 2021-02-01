import { ApolloClient, InMemoryCache } from '@apollo/client';

import { userInfoVar } from './localVariables';

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
    Character: {
      fields: {
        name: {
          read(data) {
            return data;
          },
          merge(existing, incoming) {
            return incoming;
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
