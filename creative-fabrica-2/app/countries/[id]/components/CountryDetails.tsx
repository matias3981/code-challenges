import { CountryResponse } from '@/types/types';
import { use } from 'react';

type Props = {
  countryPromise: Promise<CountryResponse>;
};
export function CountryDetails({ countryPromise }: Props) {
  const { country } = use(countryPromise);

  if (!country) {
    return <p>No country data</p>;
  }
  return (
    <div className="flex flex-col items-center">
      <span className="text-[80px]">{country.emoji}</span>
      <h1 className="text-2xl font-bold">{country.name}</h1>
      <p>Capital {country.capital}</p>
      <p>Native {country.native}</p>
      <p>Currency {country.currency}</p>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </ul>
      <p>Continent {country.continent.name}</p>
    </div>
  );
}
