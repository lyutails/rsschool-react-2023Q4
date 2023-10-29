const path = 'https://swapi.dev/api/species/';

export async function searchSpecies(searchParam: string) {
  const response = await fetch(
    `${path}${searchParam ? `?search=${searchParam}` : ''}`
  );
  return await response.json();
}
