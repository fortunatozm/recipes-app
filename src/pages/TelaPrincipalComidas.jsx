import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MyContext from '../MyContext/Context';

import Header from '../components/Header';

import MenuInf from '../components/MenuInf';

import '../css/tela-principal/telaPrincipalComidas.css';

const FOODS_MAX_LENGTH = 12;

function TelaPrincipalComidas({ history }) {
  const { meals, searchResult, setCurLocation } = useContext(MyContext);

  const renderMeals = () => {
    if (searchResult.length > 0) {
      return searchResult;
    }
    return meals;
  };

  useEffect(() => {
    setCurLocation(history);
  });

  return (
    <>
      <Header title="Foods" />
      <h1>Categorias</h1>
      <section className="foods-container">
        {
          renderMeals().slice(0, FOODS_MAX_LENGTH)
            .map(({ strMealThumb, strMeal, idMeal }, index) => (
              <Link key={ strMeal } to={ `/foods/${idMeal}` }>
                <div
                  className="food-card"
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ strMealThumb }
                    alt={ strMeal }
                    data-testid={ `${index}-card-img` }
                  />
                  <h4 data-testid={ `${index}-card-name` }>{ strMeal }</h4>
                </div>
              </Link>
            ))
        }
      </section>
      <MenuInf />
    </>
  );
}

TelaPrincipalComidas.propTypes = {
  history: PropTypes.shape(PropTypes.any).isRequired,
};

export default TelaPrincipalComidas;
