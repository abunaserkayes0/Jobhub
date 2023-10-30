const addToItem = (item) => {
  const exitsItem = localStorage.getItem("cart");
  if (exitsItem) {
    const exitsCart = JSON.parse(exitsItem);
    exitsCart.push(item);
    localStorage.setItem("cart", JSON.stringify(exitsCart));
  } else {
    const cart = [item];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

/* const removeItem = (item) => {
  const exitsItems = getCart();
  const restItem = exitsItems.find((exitsItem) => exitsItem.id !== item.id);
  localStorage.setItem("cart", JSON.stringify(restItem));
};
 */
const getCart = () => {
  const cart = localStorage.getItem("cart");
  return JSON.parse(cart);
};

export { addToItem, getCart };
