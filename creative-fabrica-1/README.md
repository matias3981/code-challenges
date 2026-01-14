# Frontend Engineer Challenge: Studio Talent Manager

**Time Limit:** 45 Minutes
**Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS
**Data Source:** Public GraphQL API (Rick & Morty)

---

## 1. The Problem

**Scenario:**
The Casting Team needs a lightweight application to review talent profiles for an upcoming production. Your task is to build a "Talent Studio" application that allows casting directors to browse actors and view their specific details.

**Core Requirements:**

1.  **Talent Dashboard (Home):**
    - Fetch a list of "Talent" (Characters) from the GraphQL API.
    - Display them in a responsive Grid layout.
    - Each card must show: Image, Name, and Status.
2.  **Talent Details (Profile):**
    - Clicking a card navigates to a detailed profile page (`/talent/[id]`).
    - Fetch specific details for that ID.
    - Display: Large Image, Species, Origin, and Location.
    - Include a "Back to Dashboard" button.
3.  **Bonus (If time permits):**
    - Implement a client-side search bar on the Dashboard to filter talent by name instantly.

---
