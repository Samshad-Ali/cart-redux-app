import { nanoid } from "nanoid";
import React from "react";
import macebook from "../Assets/macebook.webp";
import apple from "../Assets/apple.webp";
import nikeshoe from "../Assets/nikeshoe.webp";
import iphone from "../Assets/iphone.webp";
import CartBox from "./CartBox";

const productList = [
  {
    name: "Mac Book",
    id: nanoid(),
    price: 99990,
    img: macebook,
  },
  {
    name: "Iphone 13",
    id: nanoid(),
    price: 79999,
    img: apple,
  },
  {
    name: "Iphone 14 pro",
    id: nanoid(),
    price: 119990,
    img: iphone,
  },
  {
    name: "Nike Shoe",
    id: nanoid(),
    price: 999,
    img: nikeshoe,
  },
];

const Home = () => {
  return (
    <div className="home">
      {productList.map((i) => {
        return (
          <CartBox
            key={i.id}
            price={i.price}
            id={i.id}
            image={i.img}
            name={i.name}
          />
        );
      })}
    </div>
  );
};

export default Home;
