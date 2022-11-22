import React from "react";
import css from "../../page/CreateNewWallet/Create.module.css";
import Copy from "../../image/copy.png";
import Shape from "../../image/Shape.svg";
import { Form, Button } from "react-bootstrap";

const StepOne = ({ nextStep, listItems }) => {
  const submitFormData = (e) => {
    e.preventDefault();

    nextStep();
  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <div>
          <div className={css.word}>
            {listItems.map((e, i) => (
              <div key={i} className={css.box}>
                <p className={css.number}>
                  <span>{e.index + 1}</span>
                </p>
                <span className={css.box__name}>{e.name}</span>
              </div>
            ))}
          </div>
          <div className={css.copy}>
            <span>
              Tap to Copy or Carefully write down your seed phrase and store it
              in a safe place
            </span>
            <div className={css.copy__book}>
              <img src={Copy} alt="" />
            </div>
          </div>
        </div>
        <di>
          <div className={css.how}>
            <p>How does this work?</p>
            <img src={Shape} alt="" />
          </div>
          <Button variant="primary" type="submit" className={css.app_button}>
            <span>Next</span>
          </Button>
        </di>
      </Form>
    </div>
  );
};

export default StepOne;
