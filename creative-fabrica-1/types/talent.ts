// types.ts (Append these)

// 1. Existing Individual Item Types (Keep these)
export interface TalentSummary {
  id: string;
  name: string;
  image: string;
  status: string;
}

// 2. NEW: The Shape of the "GetTalentList" Query Response
// GraphQL returns: { characters: { results: [...] } }
export interface TalentListResponse {
  characters: {
    results: TalentSummary[];
  };
}

// 3. NEW: The Shape of the "GetTalentDetail" Query Response
// GraphQL returns: { character: { ... } }
export interface TalentDetailResponse {
  character: {
    id: string;
    name: string;
    image: string;
    species: string;
    gender: string;
    origin: { name: string };
    location: { name: string };
  };
}
