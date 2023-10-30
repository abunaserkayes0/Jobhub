import React, { useEffect, useState } from "react";
import { getCart, removeItem } from "../../LocalStorage/LocalStorage";
import SingleCart from "../SingleCart/SingleCart";

const Cart = () => {
  const cartElements = getCart();
  const [items, setItems] = useState(cartElements);
  useEffect(() => {
    setItems(cartElements);
  }, []);

  const handelDeleteToCart = (id) => {
    const restItem = items.filter((item) => item.id != id);
    setItems(restItem);
    removeItem(id)
  };

  return (
    <>
      <div className="jobs-details_heading">
        <h2 className="text-3xl font-bold text-center py-20">Applied Jobs</h2>
      </div>
      <div>
        {items?.map((singleItem) => (
          <SingleCart
            singleItem={singleItem}
            key={singleItem.id}
            handelDeleteToCart={handelDeleteToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Cart;
