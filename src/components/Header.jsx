import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import MyContext from '../MyContext/Context';
import SearchBar from './SearchBar';

function Header({ title }) {
  const { searchBar, setSearchBar } = useContext(MyContext);

  const handleSearchBar = () => {
    if (searchBar === false) {
      setSearchBar(true);
    }
    if (searchBar === true) {
      setSearchBar(false);
    }
  };

  return (
    <header>
      <nav>
        <Link to="/profile">
          <img
            src={ profileIcon }
            alt="imagem do perfil"
            data-testid="profile-top-btn"
          />
        </Link>
        <h1 data-testid="page-title">
          { title }
        </h1>
        <button
          type="button"
          onClick={ handleSearchBar }
        >
          <img
            src={ searchIcon }
            alt="icone de pesquisa"
            data-testido="search-top-btn"
          />
        </button>
      </nav>
      <div>
        { searchBar && <SearchBar /> }
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
