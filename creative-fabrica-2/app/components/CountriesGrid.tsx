import { CountriesResponse } from '@/types/types';
import Link from 'next/link';
import { use } from 'react';

type Props = {
  countriesPromise: Promise<CountriesResponse>;
};

export function CountriesGrid({ countriesPromise }: Props) {
  const { countries } = use(countriesPromise);

  if (!countries || !countries.length) {
    return (
      <div>
        <p>No countries listed</p>
      </div>
    );
  }
  return (
    <section>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {countries.map((c) => (
          <li key={c.code}>
            <Link href={`/countries/${c.code}`}>
              <div className="border-2 border-gray-400 shadow-xs rounded-md p-4 hover:shadow-lg transition transition-shadow ease-out">
                <p className="font-bold">
                  <span>{c.emoji} </span> {c.name}
                </p>
                <p className="font-medium">{c.continent.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
