export const getCategories = async () => { // retornas as categorias dos produtos
  const call = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await call.json();
  return json;
};

export const getProducts = async (QUERY) => { // retorna a lista de produtos a partir da categoria
  const call = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const json = await call.json();
  return json;
}

export const getCEP = async (cep) => { // retorna localização a partir do cep
  const call = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const json = await call.json();
  return json;
}
