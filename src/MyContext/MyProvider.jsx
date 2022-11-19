import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import fetchFoods from '../services/fetchFoods';
import fetchDrinks from '../services/fetchDrinks';

function MyProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  // header/search bar
  const [searchBar, setSearchBar] = useState(false);
  const [searchRadio, setSearchRadio] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  // end header/search bar
  // location
  const [curLocation, setCurLocation] = useState({});
  // end location

  const getFoods = async () => {
    const apiResponse = await fetchFoods();
    setMeals(apiResponse.meals);
  };

  const getDrinks = async () => {
    const apiResponse = await fetchDrinks();
    setDrinks(apiResponse.drinks);
  };

  useEffect(() => {
    getFoods();
    getDrinks();
  }, []);

  const ContextObject = {
    meals,
    drinks,
    searchBar,
    setSearchBar,
    searchRadio,
    setSearchRadio,
    searchInput,
    setSearchInput,
    searchResult,
    setSearchResult,
    curLocation,
    setCurLocation,
  };

  return (
    <MyContext.Provider value={ ContextObject }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
