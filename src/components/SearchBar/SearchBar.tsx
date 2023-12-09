import React, { type ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import searchIcon from '../../image/icons/search_icon.svg';

const SearchBar: React.FC = (setResults) => {
  const [input, setInput] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    setInput(value);
  };

  return (
    <div className='header__searchbar-container'>
      <div className='header__searchbar-wrapper'>

        <Link to='/search-results'>
          <button className='header__searchbar-button'>
            <img
              className='header__searchbar-button-icon'
              src={searchIcon}
              alt='Строка поиска'
            />
          </button>
        </Link>

      <form className='header__searchbar-form'>
        <label></label>
        <input
            className='header__searchbar-input'
            placeholder='Поиск'
            autoComplete='off'
            onChange={handleChange}
            value={input}
          />
      </form>
      </div>
    </div>
  );
};

export default SearchBar;
