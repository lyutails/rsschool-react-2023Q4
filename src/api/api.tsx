const path = 'https://swapi.dev/api/species/';

export async function searchSpecies(searchParam: string, page: number) {
  const response = await fetch(
    `${path}?page=${page}${searchParam ? `&search=${searchParam}` : ''}`
  );
  return await response.json();
}
