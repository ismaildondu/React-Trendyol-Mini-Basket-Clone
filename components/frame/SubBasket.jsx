import { useContext } from "react";
import style from "../style/SubBasket.module.css";
import { Context } from "./Context";

export default function SubBasket() {
  const { basket } = useContext(Context);

  const totalBasket = basket.reduce((total, item) => {
    return total + item.amout;
  }, 0);

  return (
    <div className={style.subBasket}>
      <p className={style.subBasketMainTitle}>Sepetim ({totalBasket} Ürün)</p>

      {basket.map((e) => {
        return (
          <div className={style.subBasketItem}>
            <div className={style.fakeImg}></div>
            <div className={style.subBasketDetail}>
              <p>
                <b>{e.brand}</b> {e.name}
              </p>
              <div className={style.basketAmout}>
                <span>Beden: {e.size}</span>
                <span>Adet: {e.amout}</span>
              </div>
              <h3>{e.price} TL</h3>
            </div>
          </div>
        );
      })}

      <button className={style.subBasketBtn}>Siparişe Git</button>
    </div>
  );
}
