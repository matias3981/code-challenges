# Frontend Engineer Practice Challenge: Country Explorer

**Time Limit:** 45 Minutes  
**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS  
**Data Source:** Public GraphQL API (Countries)

---

## 1. The Problem

**Scenario:**  
The Travel Team needs a lightweight application to browse country information for trip planning. Your task is to build a "Country Explorer" application that allows users to browse countries and view their specific details.

**API Endpoint:** `https://countries.trevorblades.com/graphql`

---

## 2. Core Requirements

### 2.1 Country Dashboard (Home Page)
- Fetch a list of countries from the GraphQL API
- Display them in a **responsive grid layout** (2 cols mobile, 3 cols tablet, 4 cols desktop)
- Each card must show:
  - **Emoji flag** (use the `emoji` field)
  - **Country name**
  - **Continent name**
- Cards should have hover states indicating they are clickable

### 2.2 Country Details Page (`/country/[code]`)
- Clicking a card navigates to a detailed country page
- Fetch specific details for that country code
- Display:
  - **Large emoji flag**
  - **Country name** (as page title)
  - **Native name**
  - **Capital city**
  - **Currency**
  - **Languages** (list all)
  - **Continent**
- Include a **"← Back to Explorer"** button that navigates home

### 2.3 Error Handling
- Show a user-friendly message if the API fails
- Handle cases where a country code doesn't exist

---

## 3. Bonus (If time permits)
- Add a **continent filter dropdown** on the dashboard to filter countries by continent
- Add **loading skeletons** instead of "Loading..." text
- Style the cards with shadows, borders, and smooth transitions

---

## 4. GraphQL Queries Reference

### List all countries:
```graphql
query GetCountries {
  countries {
    code
    name
    emoji
    continent {
      name
    }
  }
}
```

### Get single country:
```graphql
query GetCountry($code: ID!) {
  country(code: $code) {
    code
    name
    native
    emoji
    capital
    currency
    languages {
      name
    }
    continent {
      name
    }
  }
}
```

### List continents (for bonus filter):
```graphql
query GetContinents {
  continents {
    code
    name
  }
}
```

---

## 5. Evaluation Criteria

| Criteria | Weight |
|----------|--------|
| All requirements completed | 30% |
| React patterns & component structure | 25% |
| TypeScript usage | 15% |
| Code readability & organization | 15% |
| Error handling | 10% |
| Styling & UX polish | 5% |

---

## 6. Tips

1. **Read this README twice** before starting - check off each requirement
2. **Functionality first** - get it working, then make it pretty
3. **Talk through your decisions** as you code
4. **No Tailwind autocomplete in StackBlitz** - double-check class names
5. **Ask clarifying questions** if something is unclear

---

## 7. Starter Code

### `lib/graphql.ts`
```typescript
const API_URL = 'https://countries.trevorblades.com/graphql';

interface GraphQLResponse<T> {
  data: T;
  errors?: { message: string }[];
}

export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}
```

---

**Good luck! Focus on completing all core requirements before attempting bonuses.**