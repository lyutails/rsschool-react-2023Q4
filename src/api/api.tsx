import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const path = 'https://swapi.dev/api/species/';
const pathRTK = 'https://swapi.dev/api/';

export interface ApiResponseRace {
  name: string;
  classification?: string;
  designation?: string;
  average_height?: string;
  skin_colors?: string;
  hair_colors?: string;
  eye_colors?: string;
  average_lifespan?: string;
  homeworld?: string;
  language?: string;
  people?: string[];
  films?: string[];
  created?: string;
  edited?: string;
  url?: string;
  image?: string;
}

export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiResponseRace[];
}

export interface SearchParams {
  pageNumber: number;
  querySearch: string;
}

export async function searchSpecies(
  searchParam: string,
  page: number
): Promise<ApiResponse> {
  const response = await fetch(
    `${path}?page=${page}${searchParam ? `&search=${searchParam}` : ''}`
  );
  return await response.json();
}

export async function searchASpecies(id: number) {
  const response = await fetch(`${path}${id}/`);
  return await response.json();
}

export const speciesApi = createApi({
  reducerPath: 'speciesApi',
  baseQuery: fetchBaseQuery({ baseUrl: pathRTK }),
  endpoints: (builder) => ({
    getSpecies: builder.query<ApiResponse, SearchParams>({
      query: (params) => {
        const { pageNumber, querySearch } = params;
        return {
          url: `species?page=${pageNumber}${
            querySearch ? `&search=${querySearch}` : ''
          }`,
          method: 'GET',
        };
      },
      //transformResponse: (response: ApiResponse) => response.results,
    }),
  }),
});

export const { useGetSpeciesQuery } = speciesApi;
