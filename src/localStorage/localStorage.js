export const setStorage = (storageName, param2) => {
  localStorage.setItem(storageName, JSON.stringify(param2));
};

export const getStorage = (storageName) => {
  const storage = localStorage.getItem(storageName);
  return JSON.parse(storage);
};
