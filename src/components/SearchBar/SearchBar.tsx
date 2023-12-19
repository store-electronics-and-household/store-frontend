import React, { type ChangeEvent, useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
import searchIcon from '../../image/icons/search_icon.svg';
import { useNavigate } from 'react-router-dom';
import { type MediumCardProps } from '../../utils/types';
import { getSearchResults } from '../../utils/api/search-api';

interface SearchBarProps {
  handleSearch: (request: string) => void;
  passSearchResults: (array: MediumCardProps[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ passSearchResults, handleSearch }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setInput(value);
  };

  const controlFocus = useRef(null);

  const handleSumbit = (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    handleSearchBar();
    // handleSearch(input);
    // navigate('/search-results');
  };

  const onClearInput = (): void => {
    setInput('');
  };

  const handleSearchBar = (): void => {
    getSearchResults(input)
      .then((res) => {
        passSearchResults(res.content);
        handleSearch(input);
        navigate('/search-results');
        console.log(res);
      })
      .catch((error) => {
        console.log(`НЕ успех ${error}`);
      })
      .finally(() => {
        onClearInput();
      });
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

      <form className='header__searchbar-form' ref={controlFocus} onSubmit={handleSumbit}>
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
