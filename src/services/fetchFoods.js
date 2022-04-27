const fetchFoods = async () => {
  const request = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const response = request.json();
  return response;
};

export default fetchFoods;
