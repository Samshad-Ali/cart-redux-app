import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <nav>
          <Link to={'/'}>
              
          <h1>Apna Cart</h1>
          </Link>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <AiOutlineShoppingCart size={"1.5rem"} />
          <p>{cartItem.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
