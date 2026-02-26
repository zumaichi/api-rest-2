import { Character } from './Character.api-model';
import { Lookup } from '#common/models';
import { mockCities, mockCharacterCollection } from './Character.mock-data';

export const getCharacter = async (id: string): Promise<Character> => {
  return mockCharacterCollection.find((h) => h.id === id);
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (Character: Character): Promise<boolean> => {
  return true;
};
