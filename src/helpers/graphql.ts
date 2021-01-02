/**
 * Helper to run fetch w/ GraphQL.
 * ------
 * @param {string} query to run for GraphQL.
 * @param {object} variables for querying.
 */
const GraphQL = async (query: string, variables?: { [key: string]: string }) =>
  await fetch('https://countries-274616.ew.r.appspot.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })
    .then(r => r.json())
    .then(data => data)
    .catch(e => console.error(e));

export default GraphQL;
