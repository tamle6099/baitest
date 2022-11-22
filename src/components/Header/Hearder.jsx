import React from "react";
import LogoImg from "../../image/logo.png";
import IconUp from "../../image/Vector_2.svg";
import IconDow from "../../image/Vector_1.svg";
import Bell from "../../image/bell.svg";
import css from "./Hearder.module.css";
function Hearder() {
  return (
    <div className={css.hearder__container}>
      <div className={css.hearder__left}>
        <img src={LogoImg} alt="" />
        <div className={css.hearder__name}>
          <h3>Minh Nguyen</h3>
          <p>@Meta</p>
        </div>
      </div>
      <div className={css.hearder__right}>
        <div className={css.hearder__icon}>
          <img src={IconUp} alt="" />
        </div>
        <div className={css.hearder__icon}>
          <img src={IconDow} alt="" />
        </div>
        <div className={css.hearder__icon}>
          <img src={Bell} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hearder;
