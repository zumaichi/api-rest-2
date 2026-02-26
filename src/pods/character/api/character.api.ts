import { Character } from './character.api-model';
import { Lookup } from '#common/models';
import axios from 'axios';

export const getCharacterById = async (id: string): Promise<Character> => {
  const { data } = await axios.get<Character>(`/api/character/${id}`);
  return data;
};

export const getCities = async (): Promise<Lookup[]> => {
  return [];
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
