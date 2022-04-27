import React, { useContext } from 'react';
import MyContext from '../MyContext/Context';
import MenuInf from '../components/MenuInf';

import '../css/tela-principal/telaPrincipalComidas.css';

const FOODS_MAX_LEANGTH = 12;

function TelaPrincipalComidas() {
  const { meals } = useContext(MyContext);

  return (
    <>
      <header>Header</header>
      <h1>Categorias</h1>
      <section className="foods-container">
        {
          meals.length && (
            meals.slice(0, FOODS_MAX_LEANGTH)
              .map(({ strMealThumb, strMeal }, index) => (
                <div
                  key={ strMeal }
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
              ))
          )
        }
      </section>
      <MenuInf />
    </>
  );
}

export default TelaPrincipalComidas;
