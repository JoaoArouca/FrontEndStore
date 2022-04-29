export const getCategories = async () => {
  const call = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await call.json();
  return json;
};

export const getProducts = async (QUERY) => {
  const call = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const json = await call.json();
  return json;
}
