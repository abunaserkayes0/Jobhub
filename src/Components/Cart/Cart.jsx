import React, { useEffect, useState } from "react";
import { getCart } from "../../LocalStorage/LocalStorage";
import SingleCart from "../SingleCart/SingleCart";

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const cartElements = getCart();
    setItems(cartElements);
  }, []);

  return (
    <>
      <div className="jobs-details_heading">
        <h2 className="text-3xl font-bold text-center py-20">Applied Jobs</h2>
      </div>
      <div>
        {items.map((singleItem) => (
          <SingleCart singleItem={singleItem} />
        ))}
      </div>
    </>
  );
};

export default Cart;
