import { ApolloClient, InMemoryCache } from '@apollo/client';

/**
 * Error:
 * [snowpack] node_modules/@apollo/client/react/context/ApolloConsumer.js
 * Module "react" could not be resolved by Snowpack (Is it installed?).
 *
 * Solution:
 * Add the following to snowpack config:
 * (node_modules/microsite/assets/snowpack.config.cjs)
 * -----
 * {
 *    alias: {
 *      "react": "preact/compat",
 *      "react-dom": "preact/compat"
 *    }
 * }
 */

// Apollo
const GraphQL = new ApolloClient({
  uri: 'https://countries-274616.ew.r.appspot.com',
  cache: new InMemoryCache(),
});

export default GraphQL;
