import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = {
  typePolicies: {
    Query: {
      fields: {
        characters: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,
          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
};

export default new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache: new InMemoryCache({}),
});
