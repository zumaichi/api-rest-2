import { Character } from './character.api-model';
import { Lookup } from '#common/models';

const url = '/api/character';


export const getCharacterById = async (id: string): Promise<Character> => {
  const response = await fetch(`${url}/${id}`);
  const data = await response.json();
  return data;
};

export const getCities = async (): Promise<Lookup[]> => {
  return [];
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  await fetch(`${url}/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });
  return true;
};
