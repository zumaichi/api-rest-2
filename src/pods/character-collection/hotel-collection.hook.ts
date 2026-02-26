import * as React from 'react';
import { CharacterEntityVm } from './Character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './Character-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useCharacterCollection = () => {
  const [CharacterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
      setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    );
  };

  return { CharacterCollection, loadCharacterCollection };
};
