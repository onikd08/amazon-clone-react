export const addToLocalStorage = (id) => {
  let storedCart = {};
  const shoppingCart = localStorage.getItem("shopping-cart");
  if (shoppingCart) {
    storedCart = JSON.parse(shoppingCart);
  }
  const quantity = storedCart[id];
  if (quantity) {
    storedCart[id] = quantity + 1;
  } else {
    storedCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
};

export const removeCart = () => {
  //const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  localStorage.removeItem("shopping-cart");
};
