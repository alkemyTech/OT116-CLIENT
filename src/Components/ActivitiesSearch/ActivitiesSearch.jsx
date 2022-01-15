import React, { useState, useEffect, useRef } from 'react';
import {
  Input, FormGroup, FormHelperText,
} from '@mui/material';
import { debounce } from 'lodash';
import { getAllActivities, searchActivityByTitle } from '../../Services/activitiesService';

export const apiCalls = { getAllActivities: null, searchResults: null };

const ActivitiesSearch = ({ maxWidth = 'auto' }) => {
  const [results, setResults] = useState([]);
  const [helperText, setHelperText] = useState('Porfavor Introduzca una Actividad');
  const isMounted = useRef(null);

  const areResultsNotEmpty = results?.length > 0;

  useEffect(() => {
    isMounted.current = true;
    apiCalls.getAllActivities = () => {
      getAllActivities().then((allActivities) => {
        if (isMounted.current && allActivities) {
          setResults(allActivities);
          setHelperText('Ingrese más de 3 caracteres');
        }
      });
    };
    apiCalls.searchResults = (value) => {
      searchActivityByTitle(value).then((searchResults) => {
        if (isMounted.current && searchResults) {
          setResults(searchResults);
          setHelperText(`${searchResults.length} resultados con titulo: ${value}`);
        }
      });
    };

    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleSearch = debounce(async ({ target }) => {
    try {
      const actualSearchValue = target.value;
      if (actualSearchValue.length <= 3) await apiCalls.getAllActivities();
      else await apiCalls.searchResults(actualSearchValue);
    } catch (error) {
      // Reemplazar con alerta de error cuando este implementada.
      console.error(error?.message);
    }
  }, 500, { leading: true, trailing: false });

  return (
    <div>
      <FormGroup>
        <Input
          inputProps={{ 'data-testid': 'input' }}
          onChange={handleSearch}
          placeholder="Nombre de actividad"
          sx={{ maxWidth }}
        />
        <FormHelperText>{helperText}</FormHelperText>
      </FormGroup>
      {
        areResultsNotEmpty && (
        <ul>
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
