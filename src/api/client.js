import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache: new InMemoryCache({ addTypename: false }),
});
