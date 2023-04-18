export const addToLocalStorage = (id) => {
  const storedCart = getDataFromLocalStorage();
  const quantity = storedCart[id];
  if (quantity) {
    storedCart[id] = quantity + 1;
  } else {
    storedCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
};

export const getDataFromLocalStorage = () => {
  let storedCart = {};
  const shoppingCart = localStorage.getItem("shopping-cart");
  if (shoppingCart) {
    storedCart = JSON.parse(shoppingCart);
  }
  return storedCart;
};

export const removeItemFromLocalStorage = (itemID) => {
  const localStorageData = getDataFromLocalStorage();
  if (itemID in localStorageData) {
    delete localStorageData[itemID];
    localStorage.setItem("shopping-cart", JSON.stringify(localStorageData));
  }
};

export const removeShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};
