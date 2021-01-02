import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
// import fetch from 'isomorphic-fetch';
// import fetch from 'cross-fetch';
// import fetch from 'node-fetch';
import fetch from 'unfetch';

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

/**
 * Error running 'yarn build';
 * (node:76839) UnhandledPromiseRejectionWarning:
 * Invariant Violation: Invariant Violation: 22
 * ------
 * 22: {
 *   file: "@apollo/client/link/http/checkFetcher.js",
 *   node: new InvariantError("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ")
 * },
 *
 * Solution:
 * Supply a 'fetch' to Apollo.
 * i.e. 'node-fetch' / 'isomorphic-fetch' / 'cross-fetch'.
 */

const GraphQL = new ApolloClient({
  link: new HttpLink({ uri: 'https://countries-274616.ew.r.appspot.com', fetch }),
  cache: new InMemoryCache(),
});

export default GraphQL;
