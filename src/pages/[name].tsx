import { FunctionalComponent } from 'preact';
import { definePage } from 'microsite/page';
import { Head, seo } from 'microsite/head';
import { GraphQL, capitalizeFirstLetter } from '@/helpers';
import { ApolloQueryResult, gql } from '@apollo/client';

type Country = {
  name: string;
  capital: string;
  population: number;
};

interface IndexProps {
  countries: Country[];
}

const Index: FunctionalComponent<IndexProps> = ({ countries }) => {
  return (
    <>
      <Head>
        <seo.title>Microsite</seo.title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>

      <main>
        {countries.map(country => (
          <>
            <h1>Welcome to {country.name}!</h1>
            <h2>Capital: {country.capital}</h2>
          </>
        ))}

        <p>
          Ready to build something amazing? <a href="https://github.com/natemoo-re/microsite">Read the docs</a> to get started.
        </p>
      </main>
    </>
  );
};

/**
 * Microsite definePage method.
 */
export default definePage(Index, {
  path: '[name]',
  async getStaticPaths() {
    const STARTS_WITH: string = 'Ne';
    const query: string = `
      query Country {
        Country(filter: {name_starts_with: "${STARTS_WITH}" }) {
          name 
          capital
          population
        }
      }
    `;

    const response: { data: { Country: Country[] } } = await GraphQL.query({
      query: gql`
        ${query}
      `,
    });
    console.log(response);
    const paths = response.data.Country.map(({ name }) => ({ params: { name: name.toLowerCase() } }));

    return { paths };
  },
  async getStaticProps({ params }) {
    const query = `
      query countries($name: String!) {
        Country(name: $name) {
          name
          capital
          population
        }
      }
    `;

    const response: { data: { Country: Country[] } } = await GraphQL.query({
      query: gql`
        ${query}
      `,
      variables: {
        name: capitalizeFirstLetter(params.name),
      },
    });

    return {
      props: { countries: response.data.Country },
    };
  },
});
