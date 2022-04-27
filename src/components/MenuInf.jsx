import React from 'react';
import { Link } from 'react-router-dom';
import drinIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../css/footer.css';

function MenuInf() {
  return (
    <nav data-testid="footer" className="footerClass">
      <Link to="/drinks" data-testid="drinks-bottom-btn">
        {/* Página de bebidas */}
        <img src={ drinIcon } alt="drink" />
      </Link>
      <Link to="/explore" data-testid="explore-bottom-btn">
        {/* Página de explorar */}
        <img src={ exploreIcon } alt="explore" />
      </Link>
      <Link to="/foods" data-testid="food-bottom-btn">
        {/* Página de comidas */}
        <img src={ mealIcon } alt="meal" />
      </Link>
    </nav>
  );
}

export default MenuInf;
