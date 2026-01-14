import { fetchGraphQL } from '@/lib/graphql';
import { GET_TALENT_LIST } from '@/lib/queries';
import { TalentListResponse } from '@/types/talent';
import Image from 'next/image';
import Link from 'next/link';

export async function TalentGrid() {
  const { characters } = await fetchGraphQL<TalentListResponse>(
    GET_TALENT_LIST
  );

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {characters.results.map((r) => (
        <Link key={r.id} href={`/talent/${r.id}`}>
          <div className="relative h-[300px] w-full">
            <Image src={r.image} alt="" fill className="object-fill" />
          </div>
          <p className="text-lg font-medium">{r.name}</p>
          <p className="text-sm text-gray-400">{r.status}</p>
        </Link>
      ))}
    </section>
  );
}
