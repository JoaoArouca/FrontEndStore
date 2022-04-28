export const setStorage = (storageName, param2) => {
  localStorage.setItem(storageName, JSON.stringify(param2));
};
