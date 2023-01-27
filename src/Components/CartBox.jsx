import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const CartBox = ({ name, price, id, image }) => {
  const dispatch = useDispatch();

  const AddtoCart = (data) => {
    dispatch({
      type: "addtoCart",
      payload: data,
    });
    dispatch({ type: "Price" });
    toast.success("Added to Cart");
  };

  return (
    <div className="cart-box">
      <img src={image} />
      <p>{name}</p>
      <h3>₹{price} </h3>
      <button
        onClick={() => AddtoCart({ name, price, id, quantity: 1, image })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartBox;
