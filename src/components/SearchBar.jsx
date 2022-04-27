import React, { useContext, useEffect } from 'react';
import MyContext from '../MyContext/Context';
import { firstLetterRadioFetch,
  ingredientRadioFetch, nameRadioFetch,
  ingredientDrinksRadioFetch, nameDrinksRadioFetch,
  firstLetterDrinksRadioFetch } from '../services/SearchApi';
import Input from './Input';

function SearchBar() {
  const { searchRadio, setSearchRadio,
    searchInput, setSearchInput, searchResult,
    setSearchResult, curLocation } = useContext(MyContext);

  const handleRequest = async () => {
    if (searchRadio === 'ingredient') {
      if (curLocation.location.pathname === '/drinks') {
        const result = await ingredientDrinksRadioFetch(searchInput);
        return setSearchResult(result);
      }
      const result = await ingredientRadioFetch(searchInput);
      return setSearchResult(result);
    }
    if (searchRadio === 'name') {
      if (curLocation.location.pathname === '/drinks') {
        const result = await nameDrinksRadioFetch(searchInput);
        return setSearchResult(result);
      }
      const result = await nameRadioFetch(searchInput);
      return setSearchResult(result);
    }
    if (searchRadio === 'firstLetter') {
      if (searchInput.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        if (curLocation.location.pathname === '/drinks') {
          const result = await firstLetterDrinksRadioFetch(searchInput);
          return setSearchResult(result);
        }
        const result = await firstLetterRadioFetch(searchInput);
        return setSearchResult(result);
      }
    }
  };

  useEffect(() => {
    if (searchResult.length === 1 && curLocation.location.pathname === '/foods') {
      curLocation.push(`/foods/${searchResult[0].idMeal}`);
    }
    if (searchResult.length === 1 && curLocation.location.pathname === '/drinks') {
      curLocation.push(`/drinks/${searchResult[0].idDrink}`);
    }
  }, [searchResult, curLocation]);

  return (
    <div>
      <Input
        type="text"
        inputName="searchBar"
        id="searchBar"
        value={ searchInput }
        testId="search-input"
        onChange={ ({ target }) => setSearchInput(target.value) }
      />
      <div>
        <label htmlFor="ingredient">
          <input
            type="radio"
            name="searchRadio"
            id="ingredient"
            value="ingredient"
            data-testid="ingredient-search-radio"
            onChange={ ({ target }) => setSearchRadio(target.value) }
          />
          ingredient
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            name="searchRadio"
            id="name"
            value="name"
            data-testid="name-search-radio"
            onChange={ ({ target }) => setSearchRadio(target.value) }
          />
          Name
        </label>
        <label htmlFor="firstLetter">
          <input
            type="radio"
            name="searchRadio"
            id="firstLetter"
            value="firstLetter"
            data-testid="first-letter-search-radio"
            onChange={ ({ target }) => setSearchRadio(target.value) }
          />
          First letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleRequest }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
