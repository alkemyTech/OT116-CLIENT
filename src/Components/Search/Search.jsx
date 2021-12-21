import React, { useState } from 'react';
import { debounce } from 'lodash';
import './Search.css';

//  fetch(`https://demo.dataverse.org/api/search?q=${value}`) to prove that it works

const Debounce = () => {
  const [searchfilter, setSearchfilter] = useState('');

  const handleChange = debounce((value) => {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSearchfilter(json.data.items));
  }, 500);

  return (
    <>
      <input
        type="text"
        className="search"
        placeholder="Buscar"
        onChange={(e) => handleChange(e.target.value)}
      />
      {searchfilter.length > 0 && (
        <div className="autocomplete">
          {searchfilter.map((el) => (
            <div className="autocompleteItems">
              <span>{el.name}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Debounce;
