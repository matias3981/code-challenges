// lib/graphql.ts

const API_URL = 'https://countries.trevorblades.com/graphql';

// We define an interface for the raw GraphQL JSON response
interface GraphQLResponse<T> {
  data: T;
  errors?: { message: string }[];
}

/**
 * <T> allows us to pass the expected return type when we call the function.
 * The function returns a Promise that resolves to T.
 */
export async function fetchGraphQL<T>(
  query: string,
  variables = {}
): Promise<T> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // We cast the parsed JSON to our expected shape
  const json = (await res.json()) as GraphQLResponse<T>;

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}
