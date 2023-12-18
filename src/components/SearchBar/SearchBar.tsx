import React, { type ChangeEvent, useState } from 'react';
// import { Link } from 'react-router-dom';
import searchIcon from '../../image/icons/search_icon.svg';
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  handleSearch: (request: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSumbit = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSearch(input);
    navigate('/search-results');
  };

  const handleSearchBar = (): void => {
    handleSearch(input);
    navigate('/search-results');
  };

  return (
    <div className='header__searchbar-container'>
      <div className='header__searchbar-wrapper'>

        {/* <Link to='/search-results'> */}
          <button className='header__searchbar-button'>
            <img
              className='header__searchbar-button-icon'
              src={searchIcon}
              alt='Строка поиска'
              onClick={handleSearchBar}
            />
          </button>
        {/* </Link> */}

      <form className='header__searchbar-form' onSubmit={handleSumbit}>
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
