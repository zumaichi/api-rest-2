import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './Character-collection.vm';
import { CharacterCard } from './components/Character-card.component';
import * as classes from './Character-collection.styles';

interface Props {
  CharacterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { CharacterCollection, onCreateCharacter, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add Character
      </Button>

      <ul className={classes.list}>
        {CharacterCollection.map((Character) => (
          <li key={Character.id}>
            <CharacterCard
              Character={Character}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
