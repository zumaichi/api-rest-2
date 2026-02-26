import * as apiModel from './api/Character-collection.api-model';
import * as viewModel from './Character-collection.vm';

export const mapFromApiToVm = (
  Character: apiModel.CharacterEntityApi
): viewModel.CharacterEntityVm => ({
  id: Character.id,
  picture: Character.thumbNailUrl,
  name: Character.name,
  description: Character.shortDescription,
  rating: Character.CharacterRating,
  address: Character.address1,
});
