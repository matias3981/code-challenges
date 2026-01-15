// types/country.ts

// Individual country summary for the list view
export interface CountrySummary {
  code: string;
  name: string;
  emoji: string;
  continent: {
    name: string;
  };
}

// Full country details for the detail page
export interface CountryDetail {
  code: string;
  name: string;
  native: string;
  emoji: string;
  capital: string;
  currency: string;
  languages: {
    name: string;
  }[];
  continent: {
    name: string;
  };
}

// Continent for the bonus filter
export interface Continent {
  code: string;
  name: string;
}

// GraphQL Response Types

export interface CountriesResponse {
  countries: CountrySummary[];
}

export interface CountryResponse {
  country: CountryDetail | null;
}

export interface ContinentsResponse {
  continents: Continent[];
}
