export const getCategories = async () => { // retornas as categorias dos produtos
  const call = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await call.json();
  return json;
};

export const getProductsBySearch = async (QUERY) => { // retorna a lista de produtos por pesquisa
  const call = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
  const json = await call.json();
  return json;
};

export const getCEP = async (cep) => { // retorna localização a partir do cep
  const call = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const json = await call.json();
  return json;
};

export const getRandomProductList = async () => {
  // retorna de forma aleatória uma lista de produtos da mesma categoria
  const firstCall = await fetch('https://api.mercadolibre.com/sites/MLB/categories'); // chama api de categorias
  const jsonCategories = await firstCall.json();

  const randomNum = Math.floor(Math.random() * 31);

  const secondCall = await fetch(
    // chama api de produtos por categoria, usando o id de uma categoria aleatória
    `https://api.mercadolibre.com/sites/MLB/search?category=${jsonCategories[randomNum].id}`,
  );
  const jsonList = await secondCall.json();

  return jsonList.results;
};

export const getProductDetails = async (productId) => { // retorna os detalhes de um produto pelo id
  const call = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const json = await call.json();
  return json;
};
