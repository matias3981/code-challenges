import { fetchGraphQL } from '@/lib/graphql';
import { GET_COUNTRIES } from '@/lib/queries';
import { CountriesResponse } from '@/types/types';
import { CountriesGrid } from './components/CountriesGrid';
import { Suspense } from 'react';
import { CountriesSkeleton } from './components/CountriesSkeleton';

export default function Home() {
  const countriesPromise = fetchGraphQL<CountriesResponse>(GET_COUNTRIES);

  return (
    <main className="pt-4 max-w-5xl mx-auto">
      <Suspense fallback={<CountriesSkeleton />}>
        <CountriesGrid countriesPromise={countriesPromise} />
      </Suspense>
    </main>
  );
}
