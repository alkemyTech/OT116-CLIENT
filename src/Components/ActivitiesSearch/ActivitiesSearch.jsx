import React, { useState } from 'react';
import {
  Input, FormGroup, FormHelperText,
} from '@mui/material';
import { debounce } from 'lodash';
import { getAllActivities, searchActivityByTitle } from '../../Services/activitiesService';

export const apiCalls = { getAllActivities: null, searchResults: null };

const ActivitiesSearch = ({ maxWidth }) => {
  const [results, setResults] = useState([]);
  const [helperText, setHelperText] = useState('Porfavor Introduzca una Actividad');

  const areResultsNotEmpty = results?.length > 0;

  apiCalls.getAllActivities = async () => {
    const allActivities = await getAllActivities();
    setResults(allActivities);
    setHelperText('Ingrese más de 3 caracteres');
  };

  apiCalls.searchResults = async (value) => {
    const searchResults = await searchActivityByTitle(value);
    if (searchResults) {
      setResults(searchResults);
      setHelperText(`${searchResults.length} resultados con titulo: ${value}`);
    }
  };

  const handleSearch = debounce(async ({ target }) => {
    try {
      const actualSearchValue = target.value;
      if (actualSearchValue.length <= 3) apiCalls.getAllActivities();
      else apiCalls.searchResults(actualSearchValue);
    } catch (error) {
      // Reemplazar con alerta de error cuando este implementada.
      console.error(error?.message);
    }
  }, 500);

  return (
    <div>
      <FormGroup>
        <Input
          inputProps={{ 'data-testid': 'input' }}
          onChange={handleSearch}
          placeholder="Nombre de actividad"
          sx={{ maxWidth }}
        />
        <FormHelperText data-testid="helperText">{helperText}</FormHelperText>
      </FormGroup>
      {
        areResultsNotEmpty && (
        <ul data-testid="results-list">
          { // Esto es un mapeado de prueba.
          results?.map((activity) => (
            <li key={activity.id}>{activity?.name}</li>
          ))
        }
        </ul>
        )
      }
    </div>
  );
};

export default ActivitiesSearch;
