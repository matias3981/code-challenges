// lib/queries.ts

export const GET_TALENT_LIST = `
  query GetTalentList {
    characters(page: 1) {
      results {
        id
        name
        image
        status
      }
    }
  }
`;

export const GET_TALENT_DETAIL = `
  query GetTalentDetail($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;
