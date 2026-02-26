import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './Character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './Character.mappers';
import { Lookup } from '#common/models';
import { CharacterComponent } from './Character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [Character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const [cities, setCities] = React.useState<Lookup[]>([]);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCityCollection = async () => {
    const apiCities = await api.getCities();
    setCities(apiCities);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadCityCollection();
  }, []);

  const handleSave = async (Character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(Character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save Character');
    }
  };

  return (
    <CharacterComponent
      Character={Character}
      cities={cities}
      onSave={handleSave}
    />
  );
};
