import React from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function MyProvider({ children }) {
  const ContextObject = {};

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
