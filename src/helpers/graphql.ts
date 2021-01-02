import { request, gql } from 'graphql-request';

/**
 * Helper to run fetch w/ GraphQL.
 * ------
 * @param {string} query to run for GraphQL.
 * @param {object} variables for querying.
 */
const GraphQL = async (query: string, variables?: { [key: string]: string }) =>
  await request(
    'https://countries-274616.ew.r.appspot.com/',
    gql`
      ${query}
    `,
    variables,
  );

export default GraphQL;
