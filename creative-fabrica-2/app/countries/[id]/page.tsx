import { fetchGraphQL } from '@/lib/graphql';
import { GET_COUNTRY_BY_ID } from '@/lib/queries';
import { CountryResponse } from '@/types/types';
import { Suspense } from 'react';
import { CountryDetails } from './components/CountryDetails';
import Link from 'next/link';

export default function Country({ params }: { params: { id: string } }) {
  console.log(params);
  const { id } = params;
  const countryPromise = fetchGraphQL<CountryResponse>(GET_COUNTRY_BY_ID, {
    code: id,
  });

  return (
    <main>
      <header className="w-full bg-slate-200 p-4">
        <Link href={'/'}>← Back to Explorer</Link>
      </header>
      <Suspense>
        <CountryDetails countryPromise={countryPromise} />
      </Suspense>
    </main>
  );
}
