import React from 'react';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { TextFieldComponent } from '#common/components';
import { Lookup } from '#common/models';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import * as classes from './character.styles';

interface Props {
  character: Character;
  cities: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, onSave } = props;

  return (
    <Box className={classes.root}>
      {character.image && (
        <Card sx={{ maxWidth: 300, marginBottom: 2 }}>
          <CardMedia
            component="img"
            height="300"
            image={character.image}
            alt={character.name}
          />
        </Card>
      )}
      <Formik
        onSubmit={onSave}
        initialValues={character}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form>
            <Stack spacing={2} sx={{ maxWidth: 500 }}>
              <TextFieldComponent name="name" label="Name" />
              <TextFieldComponent name="status" label="Status" disabled={true} />
              <TextFieldComponent name="species" label="Species" disabled={true} />
              <TextFieldComponent name="gender" label="Gender" disabled={true} />
              <TextFieldComponent name="type" label="Type" disabled={true} />
              <TextFieldComponent name="origin" label="Origin" disabled={true} />
              <TextFieldComponent name="location" label="Location" disabled={true} />
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
