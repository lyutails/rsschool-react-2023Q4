import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
  pageNumber?: number;
  querySearch?: string;
  id?: string;
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
    }),
  }),
});

export const aSpeciesApi = createApi({
  reducerPath: 'aSpeciesApi',
  baseQuery: fetchBaseQuery({ baseUrl: pathRTK }),
  endpoints: (builder) => ({
    getASpecies: builder.query<ApiResponseRace, SearchParams>({
      query: (params) => {
        const { id } = params;
        return {
          url: `species/${id}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetSpeciesQuery } = speciesApi;
export const { useGetASpeciesQuery } = aSpeciesApi;
