import { getDataFromLocalStorage } from "../utilities/fakedb";

export const loadProductsAndCart = async () => {
  const data = await fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
  );
  const products = await data.json();

  const cartProducts = getDataFromLocalStorage();
  const cart = [];
  for (const id in cartProducts) {
    const targetProduct = products.find((item) => item.id === id);

    if (targetProduct) {
      const quantity = cartProducts[id];
      targetProduct.quantity = quantity;
      cart.push(targetProduct);
    }
  }
  return { products, cart };
};
