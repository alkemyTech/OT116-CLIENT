import React, { useState } from 'react';
import { debounce } from 'lodash';
import './SearchMembers.css';

const Debounce = () => {
  const [searchfilter, setSearchfilter] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = debounce((members) => {
    if (members.length >= 2) {
      fetch(`http://ongapi.alkemy.org/api/members?search=${members}`)
        .then((res) => res.json())
        .then((json) => {
          setSearchfilter(json.data);
          setMessage('No hay resultados para tu búsqueda');
        });
    } else {
      setMessage('Ingresa al menos 2 caracteres para la búsqueda');
    }
  }, 3000);

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
