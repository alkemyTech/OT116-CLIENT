import React, { useState } from 'react';
import { debounce } from 'lodash';
import './NovedadesSearch.css';

const data = [{ color: 'white' }, { color: 'blue' }, { color: 'red' }, { color: 'pink' }];

const NovedadesSearch = function () {
  const [searchedTitle, setSearchedTitle] = useState('');
  const filter = data.filter((item) => item.color.includes(searchedTitle));

  const handleInput = debounce((val) => {
    setSearchedTitle(val);
  }, 2000);

  return (
    <div className="search">
      <input type="text" placeholder="Buscar titulo" className="search-input" onChange={(e) => handleInput(e.target.value)} />
      {searchedTitle.length > 0 && <div>{filter.map((i) => <p key={i}>{i.color}</p>)}</div>}
    </div>
  );
};

export default NovedadesSearch;
