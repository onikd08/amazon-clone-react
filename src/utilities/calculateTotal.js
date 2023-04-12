const calculateTotal = (cart) => {
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice += product.price;
    totalShipping += product.shipping;
  }
  let grandTotal = totalPrice + totalShipping;
  return {
    totalPrice,
    totalShipping,
    grandTotal,
  };
};
export default calculateTotal;
