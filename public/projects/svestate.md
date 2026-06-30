A white-label platform system for real estate agents — the idea being that the underlying codebase stays the same while each client gets their own branded instance to showcase and manage their property listings. Built in collaboration with my partner Sven (repo lives under his account); I owned the React frontend, API integration, and the map component.

Never shipped, but the implementation got far enough to be a solid full-stack reference — Django REST Framework on the backend, React and TypeScript on the frontend, agent-facing listing management throughout.

The goal was to build something end-to-end: not a frontend that mocks its data, not a backend with no UI, but a fully integrated system where the API design and the UI are built together with a real use case in mind.

## Backend

- **Django + Django REST Framework** — ModelViewSets for the core listing endpoints, with filtering, ordering, and cursor-based pagination
- Custom serializers handling nested relationships (agent → listings, listing → features) and computed fields (distance from search point)
- Postgres with PostGIS for the coordinate data; raw SQL for the proximity query that powers the map clustering
- JWT authentication via `djangorestframework-simplejwt`, with a refresh-token rotation pattern

## Frontend

- **React 18 + TypeScript** with a strict `tsconfig` — no `any`, no implicit returns
- Data fetching with React Query: stale-while-revalidate for the listing grid, optimistic updates for saved/unsaved state
- The map component uses the Leaflet API directly rather than a React wrapper, managed via `useEffect` and `useRef` — cleaner lifecycle control and no extra bundle weight
- Property cards are virtualized (react-window) so the grid stays performant at 200+ listings

## Map integration

The map was the interesting part. Each listing has a `lat/lng` pair stored in Postgres. The API returns coordinates alongside listing data, and the frontend clusters markers client-side using a quadtree. Clicking a cluster zooms to its bounds; clicking a marker opens a popover with the listing summary and a link to the detail page.

The proximity search works the other way — dragging the map calls the API with the new viewport bounds, filtering listings to only those within the visible area.

## Stack

`Django` `Django REST Framework` `PostgreSQL` `React 18` `TypeScript` `React Query` `Leaflet` `react-window`
