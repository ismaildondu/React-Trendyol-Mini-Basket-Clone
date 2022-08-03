import style from "../style/AddItem.module.css";
import { Context } from "./Context";
import { useContext } from "react";

export default function AddItem() {
  const { basket, setBasket } = useContext(Context);
  const addBasket = () => {
    setBasket([
      ...basket,
      {
        brand: "Adidas",
        name: "Çorap Çekmecesi Pamuklu Unisex Görünmez",
        size: 46,
        amout: 1,
        price: 70,
      },
    ]);
  };

  return <button onClick={addBasket}>EKLE</button>;
}
