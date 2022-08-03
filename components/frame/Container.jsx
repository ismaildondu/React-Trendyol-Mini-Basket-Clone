import style from "../style/Container.module.css";
import { ReactFragment } from "react";
function Container(props) {
  return <div className={style.container}>{props.children}</div>;
}

export default Container;
