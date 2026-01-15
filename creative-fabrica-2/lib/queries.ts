// lib/queries.ts

export const GET_COUNTRIES = `
  query GetCountries {
    countries {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export const GET_COUNTRY_BY_ID = `
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      emoji
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

export const GET_CONTINENTS = `
  query GetContinents {
    continents {
      code
      name
    }
}`;
