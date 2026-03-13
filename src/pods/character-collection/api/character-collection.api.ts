import { Character } from './character-collection.api-model';

const url = '/api/character';

export const getCharacterCollection = async (): Promise<Character[]> => {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data.results;
  } else {
    throw new Error(response.statusText);
  }
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
  return response.ok;
};
