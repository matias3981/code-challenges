import { fetchGraphQL } from '@/lib/graphql';
import { GET_TALENT_DETAIL } from '@/lib/queries';
import { TalentDetailResponse } from '@/types/talent';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next/types';

export async function generateMetadata(
  {
    params,
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const talent = await fetchGraphQL<TalentDetailResponse>(GET_TALENT_DETAIL, {
    id,
  });

  return {
    title: `Welcome to ${talent.character.name} personal site`,
  };
}

export default async function TalentById({
  params,
}: {
  params: { id: string };
}) {
  const talent = await fetchGraphQL<TalentDetailResponse>(GET_TALENT_DETAIL, {
    id: params.id,
  });
  const { character } = talent || {};

  return (
    <main className="flex flex-col items-center">
      <div className="rounded-full overflow-hidden w-fit">
        <Image src={character.image} width={400} height={400} alt="" />
      </div>
      <div className="spacey-2">
        <h1 className="text-3xl font-bold">{character.name}</h1>
        <p className="text-sm text-gray-400">
          {character.species} - {character.gender}
        </p>
        <div className="">
          <p>{character.origin.name}</p>
          <p>{character.location.name}</p>
        </div>
      </div>
    </main>
  );
}
