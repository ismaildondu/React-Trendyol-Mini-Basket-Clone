import { useContext, useState } from "react";

import style from "../style/Basket.module.css";
import SubBasket from "./SubBasket";
import { Context } from "./Context";
export default function Basket() {
  const [isHover, setIsHover] = useState(false);

  const { basket } = useContext(Context);

  const totalBasket = basket.reduce((total, item) => {
    return total + item.amout;
  }, 0);

  const handleMouseEnter = (set) => {
    setIsHover(true);
    console.log(isHover);
  };

  const falseMouseEnter = () => {
    setIsHover(false);
    console.log(isHover);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={falseMouseEnter}
      className={style.basketBox}
    >
      <span className={style.basketTitle}>Sepetim</span>
      <span className={style.basketCircle}>{totalBasket}</span>
      {isHover && <SubBasket />}
    </div>
  );
}
