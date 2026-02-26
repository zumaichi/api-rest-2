import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: character.id.toString(),
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  origin: character.origin.name,
  location: character.location.name,
  image: character.image,
  type: character.type || 'N/A',
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character =>
  ({
    id: Number(character.id),
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    origin: {
      name: character.origin,
      url: '',
    },
    location: {
      name: character.location,
      url: '',
    },
    image: character.image,
    type: character.type,
    episode: [],
    url: '',
    created: new Date().toISOString(),
  }) as unknown as apiModel.Character;
