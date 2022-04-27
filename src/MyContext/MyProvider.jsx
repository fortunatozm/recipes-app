import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function MyProvider({ children }) {
  // header/search bar
  const [searchBar, setSearchBar] = useState(false);
  const [searchRadio, setSearchRadio] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  // end header/search bar
  // location
  const [curLocation, setCurLocation] = useState({});
  // end location
  const ContextObject = {
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
  children: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default MyProvider;
