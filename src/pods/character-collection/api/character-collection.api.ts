

import { Character } from './character-collection.api-model';
import { mockCharacters } from './character-collection.mock-data';
import axios from 'axios';

let characterCollection = [...mockCharacters];

const url = '/api/character';

export const getCharacterCollection = async (): Promise<Character[]> => {
  const { data } = await axios.get<{ info: { count: number }; results: Character[] }>(url);
  return data.results;
  }

export const deleteCharacter = async (id: string): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== Number(id));
  return true;
};

