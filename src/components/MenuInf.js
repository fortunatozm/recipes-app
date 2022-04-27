import React from 'react';
import '../App.css';

function MenuInf() {
  return (
    <nav data-testid="footer">
      <div data-testid="drinks-bottom-btn">
        {/* Página de bebidas */}
        <img src="/images/drinkIcon.svg" alt="drink" />
      </div>
      <div data-testid="explore-bottom-btn">
        {/* Página de explorar */}
        <img src="/images/exploreIcon.svg" alt="explore" />
      </div>
      <div data-testid="food-bottom-btn">
        {/* Página de comidas */}
        <img src="/images/mealIcon.svg" alt="meal" />
      </div>
    </nav>
  );
}

export default MenuInf;
