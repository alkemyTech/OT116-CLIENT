import React, { useState } from 'react';
import { debounce } from 'lodash';
import './NovedadesSearch.css';

const NovedadesSearch = function () {
  const [searchedTitle, setSearchedTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleInput = debounce((val) => {
    if (val.length >= 3) {
      fetch(`http://ongapi.alkemy.org/api/news?search=${val}`)
        .then((res) => res.json())
        .then((json) => {
          setSearchedTitle(json.data);
          setMessage('No hay resultados para tu búsqueda');
        });
    } else {
      setMessage('Ingresa al menos 3 caracteres para la búsqueda');
    }
  }, 1000);

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Buscar titulo"
        className="search-input"
        onChange={(e) => handleInput(e.target.value)}
      />
      {searchedTitle.length > 0 ? (
        <div>{searchedTitle.map((i) => <p key={i}>{i.name}</p>)}</div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default NovedadesSearch;
