import * as apiModel from './api/Character.api-model';
import * as viewModel from './Character.vm';

export const mapCharacterFromApiToVm = (
  Character: apiModel.Character
): viewModel.Character => ({
  ...Character,
  id: Character.id,
  name: Character.name,
  description: Character.shortDescription,
  rating: Character.CharacterRating,
  address: Character.address1,
  city: Character.city,
});

export const mapCharacterFromVmToApi = (
  Character: viewModel.Character
): apiModel.Character =>
  ({
    ...Character,
    id: Character.id,
    name: Character.name,
    shortDescription: Character.description,
    CharacterRating: Character.rating,
    address1: Character.address,
    city: Character.city,
  }) as unknown as apiModel.Character;
