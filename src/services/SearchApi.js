export const ingredientRadioFetch = async (ingrediente) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export const nameRadioFetch = async (nome) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${nome}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export const firstLetterRadioFetch = async (primeiraLetra) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${primeiraLetra}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals;
};

export const ingredientDrinksRadioFetch = async (ingrediente) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.drinks;
};

export const nameDrinksRadioFetch = async (nome) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.drinks;
};

export const firstLetterDrinksRadioFetch = async (primeiraLetra) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${primeiraLetra}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.drinks;
};
