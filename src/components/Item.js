import React, { useState } from "react";
import './Item.css'; // Adjust the path based on your folder structure
function Item({ name, category }) {
  // Step 1: State to track if the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Event handler to toggle item in/out of cart
  const toggleCart = () => {
    setIsInCart(prevState => !prevState);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 3: Button text changes based on cart state */}
      <button className="add" onClick={toggleCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
