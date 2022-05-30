export const setStorage = (storageName, param2) => {
  localStorage.setItem(storageName, JSON.stringify(param2));
};

export const getStorage = (storageName) => {
  const storage = localStorage.getItem(storageName);
  return JSON.parse(storage);
};

export const setProductIdOnStorage = (productId) => {
  const storage = JSON.parse(localStorage.getItem('products')) || {
    cart: [],
  };

  localStorage.setItem('products', JSON.stringify(
    {
      ...storage,
      cart: [
        ...storage.cart,
        productId,
      ],
    },
  ));
};

export const getProductIdOnStorage = () => {
  const storage = localStorage.getItem('products');
  return JSON.parse(storage);
};
