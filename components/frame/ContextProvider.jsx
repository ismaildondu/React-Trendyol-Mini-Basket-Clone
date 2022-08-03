import { useState } from "react";
import { Context } from "./Context";
export default function BasketContext(props) {
  const [basket, setBasket] = useState([
    {
      brand: "Nike",
      name: "Çorap Çekmecesi Pamuklu Unisex Görünmez",
      size: 36,
      amout: 1,
      price: 59.99,
    },
  ]);

  return (
    <Context.Provider value={{ basket: basket, setBasket: setBasket }}>
      {props.children}
    </Context.Provider>
  );
}
