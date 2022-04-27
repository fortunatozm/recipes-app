import React, { useContext } from 'react';
import MyContext from '../MyContext/Context';

import '../css/tela-principal/telaPrincipalBebidas.css';

const DRINKS_MAX_LEANGTH = 12;

function TelaPrincipalBebidas() {
  const { drinks } = useContext(MyContext);
  return (
    <>
      <header>Header</header>
      <h1>Categorias</h1>
      <section className="drinks-container">
        {
          drinks.length && (
            drinks.slice(0, DRINKS_MAX_LEANGTH)
              .map(({ strDrinkThumb, strDrink }, index) => (
                <div
                  key={ strDrink }
                  className="drink-card"
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ strDrinkThumb }
                    alt={ strDrink }
                    data-testid={ `${index}-card-img` }
                  />
                  <h4 data-testid={ `${index}-card-name` }>{ strDrink }</h4>
                </div>
              ))
          )
        }
      </section>
    </>
  );
}

export default TelaPrincipalBebidas;
