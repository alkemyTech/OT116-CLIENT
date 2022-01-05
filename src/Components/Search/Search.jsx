import React, { useState } from 'react';
import { debounce } from 'lodash';
import './Search.css';

const Debounce = () => {
  const [searchfilter, setSearchfilter] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = debounce((value) => {
    if (value.length >= 3) {
      fetch(`http://ongapi.alkemy.org/api/slides?search=${value}`)
        .then((res) => res.json())
        .then((json) => {
          setSearchfilter(json.data);
          setMessage('No hay resultados para tu búsqueda');
        });
    } else {
      setMessage('Ingresa al menos 3 caracteres para la búsqueda');
    }
  }, 500);

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Buscar"
        onChange={(e) => handleChange(e.target.value)}
      />
      {searchfilter.length > 0 ? (
        <div className="autocomplete">
          {searchfilter.map((el) => (
            <div className="autocompleteItems">
              <span>{el.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <p>{message}</p>
      )}
    </>
  );
};

export default Debounce;
