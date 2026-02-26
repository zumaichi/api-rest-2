import { CharacterEntityApi } from './Character-collection.api-model';
import { mockCharacterCollection } from './Character-collection.mock-data';

let CharacterCollection = [...mockCharacterCollection];

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  return CharacterCollection;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  CharacterCollection = CharacterCollection.filter((h) => h.id !== id);
  return true;
};
