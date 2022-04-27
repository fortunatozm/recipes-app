import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import fetchFoods from '../services/fetchFoods';
import fetchDrinks from '../services/fetchDrinks';

function MyProvider({ children }) {
  const [meals, setMeals] = useState({});
  const [drinks, setDrinks] = useState({});

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
  };

  return (
    <MyContext.Provider value={ ContextObject }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default MyProvider;
