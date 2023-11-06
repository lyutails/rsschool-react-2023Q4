const path = 'https://swapi.dev/api/species/';

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

export async function searchSpecies(
  searchParam: string,
  page: number
): Promise<ApiResponse> {
  const response = await fetch(
    `${path}?page=${page}${searchParam ? `&search=${searchParam}` : ''}`
  );
  return await response.json();
}
