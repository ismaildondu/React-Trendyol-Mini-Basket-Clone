import style from "../style/Header.module.css";
import Basket from "./Basket";
export default function Header() {
  return (
    <header className={style.header}>
      <div>
        <img width={163} src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" />
      </div>
      <div>
        <Basket />
      </div>
    </header>
  );
}
