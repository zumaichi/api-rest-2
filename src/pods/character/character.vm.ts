export interface Character {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  type: string;
}

export const createEmptyCharacter = (): Character => ({
  id: '',
  name: '',
  status: '',
  species: '',
  gender: '',
  origin: '',
  location: '',
  image: '',
  type: '',
});
