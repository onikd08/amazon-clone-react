const calculateTotal = (cart) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let totalQuantity = 0;
  for (const product of cart) {
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
    totalQuantity += product.quantity;
  }
  let grandTotal = totalPrice + totalShipping;
  return {
    totalPrice,
    totalShipping,
    grandTotal,
    totalQuantity,
  };
};
export default calculateTotal;
